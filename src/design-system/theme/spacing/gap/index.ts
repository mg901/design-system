import { useLayoutEffect, useMemo } from 'react';
import { validateSpacing } from '../validation';
import './styles.scss';

export interface GapProps {
  gap?: number;
}

export const useGap = ({ gap }: GapProps) => {
  useLayoutEffect(() => {
    validateSpacing(gap);
  }, [gap]);

  return useMemo(
    () => ({
      [`gap-${gap}`]: gap,
    }),
    [gap],
  );
};
