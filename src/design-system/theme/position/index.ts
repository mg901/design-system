import { useMemo } from 'react';
import './styles.scss';

type Percents = 0 | 50 | 100 | '0' | '50' | '100';

export interface PositionProps {
  position?: 'static' | 'relative' | 'absolute' | 'fixed' | 'sticky';
  top?: Percents;
  end?: Percents;
  bottom?: Percents;
  start?: Percents;
  translate?: 'middle' | 'x-middle' | 'y-middle';
}

export const usePosition = ({
  position,
  top,
  end,
  bottom,
  start,
  translate,
}: PositionProps) =>
  useMemo(
    () => ({
      [`position-${position}`]: position,
      [`start-${start}`]: start,
      [`end-${end}`]: end,
      [`top-${top}`]: top,
      [`bottom-${bottom}`]: bottom,
      'translate-middle': translate === 'middle',
      'translate-x-middle': translate === 'x-middle',
      'translate-y-middle': translate === 'y-middle',
    }),
    [position, top, end, bottom, start, translate],
  );
