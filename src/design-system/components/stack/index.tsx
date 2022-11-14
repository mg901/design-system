import { forwardRef } from 'react';
import { clsx } from 'clsx';
import {
  useGap,
  useSpacings,
  SpacingProps,
  GapProps,
} from '@/design-system/theme/spacing';
import {
  BaseElementProps,
  AsProp,
  PolymorphicPropsWithRef,
} from '@/design-system/types';
import './styles.scss';

interface StackProps
  extends BaseElementProps,
    AsProp,
    GapProps,
    SpacingProps,
    React.HTMLAttributes<HTMLElement> {
  direction?: 'horizontal' | 'vertical';
  children: React.ReactNode;
}

const defaultElement = 'div';

export const Stack: PolymorphicPropsWithRef<
  typeof defaultElement,
  StackProps
> = forwardRef(
  (
    {
      as: Component = defaultElement,
      dataTestId,
      className,
      direction = 'vertical',
      gap,
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
    const gapClassName = useGap({ gap });
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
        className={clsx('stack', className, {
          horizontal: direction === 'horizontal',
          vertical: direction === 'vertical',
          ...gapClassName,
          ...spacingClassNames,
        })}
        {...props}
      >
        {children}
      </Component>
    );
  },
);
