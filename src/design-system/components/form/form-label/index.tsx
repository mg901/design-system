import { forwardRef, useContext } from 'react';
import { clsx } from 'clsx';
import { BaseElementProps, AsProp, PolymorphicPropsWithRef } from '../../types';
import { FormContext } from '../form-context';
import './styles.scss';

export interface FormLabelProps
  extends BaseElementProps,
    AsProp,
    React.LabelHTMLAttributes<HTMLLabelElement> {}

const defaultElement = 'label' as const;

export const FormLabel: PolymorphicPropsWithRef<
  typeof defaultElement,
  FormLabelProps
> = forwardRef<HTMLLabelElement, FormLabelProps>(
  (
    {
      as: Component = defaultElement,
      htmlFor,
      className,
      dataTestId,
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
        htmlFor={htmlFor || controlId}
        className={clsx('label', className)}
      />
    );
  },
);

FormLabel.displayName = 'FormLabel';
