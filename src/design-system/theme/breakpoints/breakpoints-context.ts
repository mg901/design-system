import { createContext, useContext } from 'react';

const MIN_BREAKPOINT = 'xs' as const;
const BREAKPOINTS = ['xs', 'sm', 'md', 'lg', 'xl', 'xxl'] as const;

export interface BreakpointsContextValue {
  breakpoints: typeof BREAKPOINTS;
  minBreakpoint: typeof MIN_BREAKPOINT;
}

export const BreakpointsContext = createContext<BreakpointsContextValue>({
  breakpoints: BREAKPOINTS,
  minBreakpoint: MIN_BREAKPOINT,
});

export const useBreakpoints = () => {
  const { breakpoints } = useContext(BreakpointsContext);

  return breakpoints;
};

export const useMinBreakpoint = () => {
  const { minBreakpoint } = useContext(BreakpointsContext);

  return minBreakpoint;
};
