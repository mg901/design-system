import {
  Children,
  cloneElement,
  useMemo,
  isValidElement,
  forwardRef,
} from 'react';
import clsx from 'clsx';
import { StepperContext } from './stepper-context';
import { StepProps } from '../step';
import { BaseElementProps } from '@/design-system/types';
import styles from './styles.module.scss';

export interface StepperProps
  extends BaseElementProps,
    React.HTMLAttributes<HTMLDivElement> {
  activeStep?: number;
}

export const Stepper = forwardRef<HTMLDivElement, StepperProps>(
  ({ dataTestId, activeStep = 0, className, children }, ref) => {
    const childrenArray = Children.toArray(children).filter(isValidElement);

    const steps = childrenArray.map((step, index) => {
      return cloneElement(step as React.ReactElement<any>, {
        index,
        isLast: index + 1 === childrenArray.length,
        ...(step.props as StepProps),
      });
    });

    const stepperContextValue = useMemo(
      () => ({
        activeStep,
      }),
      [activeStep],
    );

    return (
      <StepperContext.Provider value={stepperContextValue}>
        <div
          ref={ref}
          data-test-id={dataTestId}
          className={clsx(styles.stepper, className)}
        >
          {steps}
        </div>
      </StepperContext.Provider>
    );
  },
);
