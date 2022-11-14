import { useMemo } from 'react';
import './styles.scss';

type Radius = 'sm' | 'md' | 'lg' | 'xl' | 'xxl';

export type BorderProps = Partial<{
  borderRadius: Radius;
}>;

export const useBorder = ({ borderRadius }: BorderProps) =>
  useMemo(
    () => ({
      [`border-radius-${borderRadius}`]: borderRadius,
    }),
    [borderRadius],
  );
