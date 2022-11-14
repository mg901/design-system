import { forwardRef, useContext } from 'react';
import { clsx } from 'clsx';
import { FormContext } from '../form-context';
import { FormFeedback } from '../form-feedback';
import { AsProp, PolymorphicPropsWithRef } from '../../types';
import { BaseControlProps } from '../types';
import './styles.scss';

type FormControlElement = HTMLInputElement | HTMLTextAreaElement;

export interface FormControlProps
  extends BaseControlProps,
    AsProp,
    React.HTMLAttributes<FormControlElement> {
  type?: string;
}

const defaultElement = 'input' as const;

const ControlComponent: PolymorphicPropsWithRef<
  typeof defaultElement,
  FormControlProps
> = forwardRef<FormControlElement, FormControlProps>(
  (
    {
      as: Component = defaultElement,
      dataTestId,
      id,
      type,
      className,
      variant,
      ...props
    },
    ref,
  ) => {
    const { controlId } = useContext(FormContext);

    return (
      <Component
        {...props}
        ref={ref}
        data-test-id={dataTestId}
        type={type}
        id={controlId || id}
        className={clsx(
          'form-control',
          className,
          variant &&
            `form-control-${variant === 'valid' ? 'valid' : 'invalid'}`,
        )}
      />
    );
  },
);

ControlComponent.displayName = 'FormControl';

export const FormControl = Object.assign(ControlComponent, {
  Feedback: FormFeedback,
});
