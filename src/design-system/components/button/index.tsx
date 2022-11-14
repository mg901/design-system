import { forwardRef } from 'react';
import { useButtonProps, ButtonProps as BaseButtonProps } from './library';
import { useSpacings, SpacingProps } from '@/design-system/theme/spacing';
import {
  BaseElementProps,
  PolymorphicPropsWithRef,
} from '@/design-system/types';

import { clsx } from 'clsx';
import '../button-base/styles.scss';
import './styles.scss';

const VARIANTS = {
  primary: 'primary',
  secondary: 'secondary',
  danger: 'danger',
  warning: 'warning',
  neutral: 'neutral',
  link: 'link',
} as const;

export interface ButtonProps
  extends BaseElementProps,
    BaseButtonProps,
    SpacingProps {
  variant?: keyof typeof VARIANTS;
  size?: 'sm' | 'lg';
  active?: boolean;
}

export const Button: PolymorphicPropsWithRef<
  'button',
  ButtonProps
> = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      as,
      variant,
      active,
      size,
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
      dataTestId,
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

    const [tagName, buttonProps] = useButtonProps({
      tagName: as,
      ...props,
    });

    const Component = tagName as React.ElementType;

    return (
      <Component
        {...buttonProps}
        {...props}
        date-test-id={dataTestId}
        className={clsx(
          'btn-base',
          'btn',
          className,
          variant !== VARIANTS.primary && variant,
          size && size,
          props.href && props.disabled && 'disabled',
          {
            ...spacingClassNames,
          },
        )}
        ref={ref}
      >
        {children}
      </Component>
    );
  },
);

Button.defaultProps = {
  variant: VARIANTS.primary,
  active: false,
  disabled: false,
};

Button.displayName = 'Button';
