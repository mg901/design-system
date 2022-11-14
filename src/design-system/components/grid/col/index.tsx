/* eslint @typescript-eslint/no-use-before-define: 0 */
import { forwardRef } from 'react';
import { clsx } from 'clsx';
import {
  BaseElementProps,
  AsProp,
  PolymorphicPropsWithRef,
} from '@/design-system/types';
import { useSpacings, SpacingProps } from '@/design-system/theme/spacing';
import {
  useBreakpoints,
  useMinBreakpoint,
} from '@/design-system/theme/breakpoints/breakpoints-context';

import './styles.scss';

type NumberAttr =
  | 1
  | 2
  | 3
  | 4
  | 5
  | 6
  | 7
  | 8
  | 9
  | 10
  | 11
  | 12
  | '1'
  | '2'
  | '3'
  | '4'
  | '5'
  | '6'
  | '7'
  | '8'
  | '9'
  | '10'
  | '11'
  | '12';

type ColOrderNumber = 1 | 2 | 3 | 4 | 5 | '1' | '2' | '3' | '4' | '5';
type ColOrder = ColOrderNumber | 'first' | 'last';
type ColSize = NumberAttr | 'auto' | boolean;
type ColSpec =
  | ColSize
  | { span?: ColSize; offset?: NumberAttr; order?: ColOrder };

type Breakpoints = Partial<{
  xs: ColSpec;
  sm: ColSpec;
  md: ColSpec;
  lg: ColSpec;
  xl: ColSpec;
  xxl: ColSpec;
}>;

export interface ColProps
  extends BaseElementProps,
    AsProp,
    Breakpoints,
    SpacingProps,
    React.HTMLAttributes<HTMLElement> {}

const defaultElement = 'div';

export const Col: PolymorphicPropsWithRef<
  typeof defaultElement,
  Readonly<ColProps>
> = forwardRef<HTMLDivElement, ColProps>(
  (
    {
      as: Component = defaultElement,
      dataTestId,
      children,

      // spacings
      mt,
      mr,
      mb,
      ml,
      mx,
      my,
      pt,
      pr,
      pb,
      pl,
      px,
      py,
      ...props
    },
    ref,
  ) => {
    const spacingClassNames = useSpacings({
      mt,
      mr,
      mb,
      ml,
      mx,
      my,
      pt,
      pr,
      pb,
      pl,
      px,
      py,
    });
    const { className, spans, prefix, ...colProps } = useCol(props);

    return (
      <Component
        {...colProps}
        ref={ref}
        data-test-id={dataTestId}
        className={clsx(className, !spans.length && prefix, {
          ...spacingClassNames,
        })}
      >
        {children}
      </Component>
    );
  },
);

Col.displayName = 'Col';

function useCol(props: ColProps) {
  const prefix = 'col';
  const breakpoints = useBreakpoints();
  const minBreakpoint = useMinBreakpoint();

  const spans: string[] = [];
  const classes: string[] = [];

  breakpoints.forEach((breakpoint) => {
    const propValue = props[breakpoint];
    delete props[breakpoint];

    let span: ColSize | undefined;
    let offset: NumberAttr | undefined;
    let order: ColOrder | undefined;

    if (typeof propValue === 'object' && propValue !== undefined) {
      ({ span, offset, order } = propValue);
    } else {
      span = propValue;
    }

    const infix = breakpoint !== minBreakpoint ? `-${breakpoint}` : '';

    if (span)
      spans.push(
        span === true ? `${prefix}${infix}` : `${prefix}${infix}-${span}`,
      );

    if (order !== undefined) classes.push(`order${infix}-${order}`);
    if (offset !== undefined) classes.push(`offset${infix}-${offset}`);
  });

  return {
    ...props,
    className: clsx(props.className, ...spans, ...classes),
    spans,
    prefix,
  };
}
