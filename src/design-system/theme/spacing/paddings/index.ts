import { useLayoutEffect, useMemo } from 'react';
import { validateSpacing, isNotEmpty } from '../validation';
import { Padding } from '../types';
import './styles.scss';

export type PaddingProps = Readonly<
  Partial<{
    pt: Padding;
    pr: Padding;
    pb: Padding;
    pl: Padding;
    px: Padding;
    py: Padding;
  }>
>;

export const usePaddings = ({ pt, pr, pb, pl, px, py }: PaddingProps) => {
  useLayoutEffect(() => {
    const spacings = [pt, pr, pb, pl, px, py]
      .filter(isNotEmpty)
      .forEach((spacing) => {
        validateSpacing(spacing);
      });

    return () => spacings;
  }, [pt, pr, pb, pl, px, py]);

  return useMemo(
    () => ({
      [`pt-${pt}`]: isNotEmpty(pt),
      [`pr-${pr}`]: isNotEmpty(pr),
      [`pb-${pb}`]: isNotEmpty(pb),
      [`pl-${pl}`]: isNotEmpty(pl),
      [`px-${px}`]: isNotEmpty(px),
      [`py-${py}`]: isNotEmpty(py),
    }),
    [pt, pr, pb, pl, px, py],
  );
};
