import { forwardRef } from 'react';
import { clsx } from 'clsx';
import { FormControl } from '../form-control';
import { FormText } from '../form-text';
import { BaseControlProps } from '../types';
import './styles.scss';

type OwnProps = Partial<{
  withError: boolean;
  hint: React.ReactNode;
  type: 'text' | 'password' | 'email' | 'tel';
  value: string;
}>;

export interface InputProps
  extends Omit<BaseControlProps, 'variant'>,
    React.HTMLAttributes<HTMLInputElement>,
    OwnProps {}

export const FormInput = forwardRef<HTMLInputElement, InputProps>(
  ({ className, hint, withError, type = 'text', value, ...props }, ref) => {
    return (
      <>
        <FormControl
          {...props}
          ref={ref}
          as="input"
          type={type}
          className={clsx('input', className)}
          variant={withError ? 'invalid' : undefined}
        />

        {!withError && hint && <FormText>{hint}</FormText>}
        {withError && (
          <FormControl.Feedback variant="invalid">{hint}</FormControl.Feedback>
        )}
      </>
    );
  },
);

FormInput.displayName = 'FormInput';
