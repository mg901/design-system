import { useMemo } from 'react';
import './styles.scss';

export type BoxShadowProps = {
  boxShadow?: 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
};

export const useBoxShadow = ({ boxShadow }: BoxShadowProps) =>
  useMemo(
    () => ({
      [`box-shadow-${boxShadow}`]: boxShadow,
    }),
    [boxShadow],
  );
