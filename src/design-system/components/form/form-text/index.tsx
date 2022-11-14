import { forwardRef } from 'react';
import { clsx } from 'clsx';
import { BaseElementProps, AsProp, PolymorphicPropsWithRef } from '../../types';
import './styles.scss';

export interface FormTextProps
  extends BaseElementProps,
    AsProp,
    React.HTMLAttributes<HTMLElement> {
  muted?: boolean;
}

const defaultElement = 'small';
export const FormText: PolymorphicPropsWithRef<
  typeof defaultElement,
  FormTextProps
> = forwardRef<HTMLElement, FormTextProps>(
  (
    {
      as: Component = defaultElement,
      className,
      color,
      muted,
      children,
      ...props
    },
    ref,
  ) => {
    return (
      <Component
        {...props}
        ref={ref}
        className={clsx(
          'form-text',
          className,
          color && `text-${color}`,
          muted && 'text-muted',
        )}
      >
        {children}
      </Component>
    );
  },
);

FormText.displayName = 'FormText';
