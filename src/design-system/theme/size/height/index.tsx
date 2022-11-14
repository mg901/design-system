import { useMemo } from 'react';
import './styles.scss';

export type HeightProps = Partial<{
  height: 25 | 50 | 75 | 100 | 'auto';
  maxHeight: 100;
  vh: 100;
  minVh: 100;
}>;

export const useHeight = ({ height, maxHeight, vh, minVh }: HeightProps) =>
  useMemo(
    () => ({
      [`height-${height}`]: height,
      [`max-height-${maxHeight}`]: maxHeight,
      [`vh-${vh}`]: vh,
      [`min-vh-${minVh}`]: minVh,
    }),
    [height, maxHeight, vh, minVh],
  );
