/* eslint @typescript-eslint/no-use-before-define: 0 */
import { forwardRef } from 'react';
import { clsx } from 'clsx';
import {
  Align,
  BaseElementProps,
  AsProp,
  PolymorphicPropsWithRef,
  Variant as Color,
} from '@/design-system/types';
import { useSpacings, SpacingProps } from '@/design-system/theme/spacing';

import './styles.scss';

const VARIANTS = {
  hl2: 'hl2',
  hl1: 'hl1',
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  h5: 'h5',
  h6: 'h6',
  subtitle: 'subtitle',
  body1: 'body1',
  body2: 'body2',
  caption: 'caption',
} as const;

const WEIGHTS = {
  inherit: 'inherit',
  regular: 'regular',
  medium: 'medium',
} as const;

const VERTICAL_ALIGNS = {
  baseline: 'baseline',
  top: 'top',
  middle: 'middle',
  bottom: 'bottom',
  textTop: 'text-top',
  textBottom: 'text-bottom',
} as const;

type OwnProps = Partial<{
  color: Color | 'info' | 'muted';
  variant: keyof typeof VARIANTS;
  textAlign: Align;
  vericalAlign: keyof typeof VERTICAL_ALIGNS;
  weight: keyof typeof WEIGHTS;
}>;

export interface TextProps
  extends BaseElementProps,
    AsProp,
    SpacingProps,
    Omit<React.HTMLAttributes<HTMLSpanElement>, 'color'>,
    OwnProps {}

const defaultElement = 'span' as const;

export const Text: PolymorphicPropsWithRef<
  typeof defaultElement,
  TextProps
> = forwardRef<HTMLSpanElement, TextProps>(
  ({ as: Component = defaultElement, dataTestId, children, ...props }, ref) => {
    const { className, ...textProps } = useText(props);

    return (
      <Component
        {...textProps}
        ref={ref}
        data-test-id={dataTestId}
        className={className}
      >
        {children}
      </Component>
    );
  },
);

Text.defaultProps = {
  weight: WEIGHTS.inherit,
};

Text.displayName = 'Text';

function useText({
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
  textAlign,
  vericalAlign,
  weight,
  variant,
  color,
  ...props
}: TextProps) {
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

  return {
    ...props,
    className: clsx(
      'text',
      props.className,
      textAlign && `align-${textAlign}`,
      vericalAlign && `verical-align-${vericalAlign}`,
      weight && weight !== WEIGHTS.inherit && `weight-${weight}`,
      variant && `variant-${variant}`,
      color && `color-${color}`,
      spacingClassNames,
    ),
  };
}
