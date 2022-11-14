import { createContext, useContext } from 'react';

export interface StepperContextType {
  activeStep: number;
}

export const StepperContext = createContext<StepperContextType>({
  activeStep: 0,
});

export const useStepperContext = () => useContext(StepperContext);
