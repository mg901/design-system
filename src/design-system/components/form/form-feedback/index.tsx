import { forwardRef } from 'react';
import { clsx } from 'clsx';
import { BaseElementProps, AsProp, PolymorphicPropsWithRef } from '../../types';
import './styles.scss';

export interface FeedbackProps
  extends BaseElementProps,
    AsProp,
    React.HTMLAttributes<HTMLDivElement> {
  variant?: 'valid' | 'invalid';
}

const defaultElement = 'div';

export const FormFeedback: PolymorphicPropsWithRef<
  typeof defaultElement,
  FeedbackProps
> = forwardRef<HTMLDivElement, FeedbackProps>(
  (
    {
      as: Component = defaultElement,
      dataTestId,
      variant = 'valid',
      children,
      ...props
    },
    ref,
  ) => {
    return (
      <Component
        {...props}
        ref={ref}
        data-test-id={dataTestId}
        className={clsx('feedback', variant && `feedback-${variant}`)}
      >
        {children}
      </Component>
    );
  },
);

FormFeedback.displayName = 'FormFeedback';
