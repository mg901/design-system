import { useMemo } from 'react';
import './styles.scss';

type Overflow = 'auto' | 'hidden' | 'visible' | 'scroll';

export type OverflowProps = Readonly<{
  overflow?: Overflow;
}>;

export const useOverflow = ({ overflow }: OverflowProps) =>
  useMemo(
    () => ({
      [`overflow-${overflow}`]: overflow,
    }),
    [overflow],
  );
