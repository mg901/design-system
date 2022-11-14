import { forwardRef } from 'react';
import { clsx } from 'clsx';
import { FormGroup, FormGroupProps } from '../form-group';
import { Text } from '../../text';
import { BaseElementProps, PolymorphicPropsWithRef } from '../../types';
import './styles.scss';

export interface FloatingLabelProps extends BaseElementProps, FormGroupProps {
  text: React.ReactNode;
}

export const FloatingLabel: PolymorphicPropsWithRef<
  'div',
  FloatingLabelProps
> = forwardRef(
  ({ dataTestId, controlId, className, text, children, ...props }, ref) => {
    return (
      <FormGroup
        {...props}
        ref={ref}
        className={clsx('form-floating', className)}
      >
        {children}
        <Text as="label" color="secondary" htmlFor={controlId}>
          {text}
        </Text>
      </FormGroup>
    );
  },
);

FloatingLabel.displayName = 'FloatingLabel';
