import { useMemo } from 'react';
import './styles.scss';

export type WidthProps = Partial<{
  width: 25 | 50 | 75 | 100 | '25' | '50' | '75' | '100' | 'auto';
  vw: 100;
  minVw: 100;
}>;

export const useWidth = ({ width, vw, minVw }: WidthProps) =>
  useMemo(
    () => ({
      [`width-${width}`]: width,
      [`vw-${vw}`]: vw,
      [`min-vw-${minVw}`]: minVw,
    }),
    [width, vw, minVw],
  );
