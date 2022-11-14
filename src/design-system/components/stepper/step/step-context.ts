import { createContext, useContext } from 'react';

export type StepContextValue = Partial<{
  currentStep: number;
  active: boolean;
  completed: boolean;
}>;

export const StepContext = createContext<StepContextValue>({
  currentStep: 1,
  active: true,
  completed: false,
});

export const useStepContext = () => useContext(StepContext);
