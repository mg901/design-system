import { forwardRef, useContext, useMemo } from 'react';
import { clsx } from 'clsx';
import { FormContext } from './form-context';
import { BaseControlProps } from './types';

export type FormCheckType = 'checkbox' | 'radio' | 'switch';

export interface FormCheckProps
  extends BaseControlProps,
    React.InputHTMLAttributes<HTMLInputElement> {
  type?: FormCheckType;
  label?: React.ReactNode;
}

const defaultProps = {
  type: 'checkbox',
} as const;

export const FormCheck = forwardRef<HTMLInputElement, FormCheckProps>(
  ({ id, className, dataTestId, ...props }, ref) => {
    const { controlId } = useContext(FormContext);
    const innerFormContext = useMemo(
      () => ({
        controlId: id || controlId,
      }),
      [controlId, id],
    );

    return (
      <FormContext.Provider value={innerFormContext}>
        <input
          {...props}
          ref={ref}
          data-test-id={dataTestId}
          id={controlId || id}
          className={clsx('form-check', className)}
        />
      </FormContext.Provider>
    );
  },
);

FormCheck.defaultProps = defaultProps;
FormCheck.displayName = 'FormCheck';
