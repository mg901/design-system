import { useLayoutEffect, useMemo } from 'react';
import invariant from 'tiny-invariant';
import { CONFIG } from '../config';
import { validateSpacing, isNotEmpty } from '../validation';
import { Margin } from '../types';
import './styles.scss';

export type MarginProps = Readonly<
  Partial<{
    mt: Margin;
    mr: Margin;
    mb: Margin;
    ml: Margin;
    mx: Margin;
    my: Margin;
  }>
>;

const validateMargin = (margin?: Margin) => {
  if (typeof margin !== 'string') return;

  invariant(
    margin === 'auto',
    `[margin]: ${margin} is invalid. Enter a number multiple of ${CONFIG.GUTTER} or 'auto'`,
  );
};

export const useMargins = ({ mt, mr, mb, ml, mx, my }: MarginProps) => {
  useLayoutEffect(() => {
    const spacings = [mt, mr, mb, ml, mx, my]
      .filter(isNotEmpty)
      .forEach((spacing) => {
        validateSpacing(spacing);
        validateMargin(spacing);
      });

    return () => spacings;
  }, [mt, mr, mb, ml, mx, my]);

  return useMemo(
    () => ({
      [`mt-${mt}`]: isNotEmpty(mt),
      [`mr-${mr}`]: isNotEmpty(mr),
      [`mb-${mb}`]: isNotEmpty(mb),
      [`ml-${ml}`]: isNotEmpty(ml),
      [`mx-${mx}`]: isNotEmpty(mx),
      [`my-${my}`]: isNotEmpty(my),
    }),
    [mt, mr, mb, ml, mx, my],
  );
};
