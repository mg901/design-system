/* eslint @typescript-eslint/no-use-before-define: 0 */
import { useMemo, forwardRef } from 'react';
import { clsx } from 'clsx';
import { useStepperContext } from '../stepper/stepper-context';
import { StepContext, StepContextValue } from './step-context';
import { StepLabel } from './label';
import { StepIcon } from './icon';
import { Box } from '@/design-system';
import { BaseElementProps } from '@/design-system/types';
import './styles.scss';

export interface StepProps
  extends BaseElementProps,
    StepContextValue,
    React.HTMLAttributes<HTMLDivElement> {
  index?: number;
  isLast?: number;
  children?: React.ReactNode;
}

export const StepRoot = forwardRef<HTMLDivElement, StepProps>(
  ({ dataTestId, index, isLast, className, children, ...props }, ref) => {
    const { activeStep } = useStepperContext();

    const isFirst = index === 0;
    const active = activeStep === index;
    const currentStep = index! + 1;

    const memoizedContext = useMemo(
      () => ({
        active,
        index,
        currentStep,
        completed: activeStep > index!,
      }),
      [active, index, currentStep, activeStep],
    );

    return (
      <StepContext.Provider value={memoizedContext}>
        <div
          {...props}
          ref={ref}
          data-test-id={dataTestId}
          data-active={active}
          className={clsx('step', className, {
            first: isFirst,
            last: isLast,
          })}
        >
          {isFirst && (
            <>
              <StepIcon>{currentStep}</StepIcon>
              <Connector />
            </>
          )}
          {!isFirst && !isLast && (
            <>
              <Connector />
              <StepIcon>{currentStep}</StepIcon>
              <Connector />
            </>
          )}
          {isLast && (
            <>
              <Connector />
              <StepIcon>{currentStep}</StepIcon>
            </>
          )}
        </div>
      </StepContext.Provider>
    );
  },
);

export const Step = Object.assign(StepRoot, {
  Label: StepLabel,
});

function Connector() {
  return <span className="connector"></span>;
}
