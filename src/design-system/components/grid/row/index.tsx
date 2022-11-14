import { forwardRef } from 'react';
import { clsx } from 'clsx';
import { BaseElementProps, AsProp, PolymorphicPropsWithRef } from '../../types';
import { useSpacings, SpacingProps } from '@/design-system/theme/spacing';

import './styles.scss';

export interface RowProps
  extends BaseElementProps,
    AsProp,
    SpacingProps,
    React.HTMLAttributes<HTMLDivElement> {}

const defaultElement = 'div';

export const Row: PolymorphicPropsWithRef<
  typeof defaultElement,
  Readonly<RowProps>
> = forwardRef<HTMLDivElement, Readonly<RowProps>>(
  (
    {
      as: Component = defaultElement,
      dataTestId,
      className,
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
      children,
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

    return (
      <Component
        {...props}
        ref={ref}
        data-test-id={dataTestId}
        className={clsx(className, 'row', {
          ...spacingClassNames,
        })}
      >
        {children}
      </Component>
    );
  },
);

Row.displayName = 'Row';
