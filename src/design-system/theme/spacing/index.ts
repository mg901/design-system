import { usePaddings, PaddingProps } from './paddings';
import { useMargins, MarginProps } from './margins';

export * from './paddings';
export * from './margins';
export * from './gap';

export interface SpacingProps extends PaddingProps, MarginProps {}

export const useSpacings = ({
  mt,
  mr,
  mb,
  ml,
  mx,
  my,

  pt,
  pr,
  pb,
  pl,
  px,
  py,
}: SpacingProps) => {
  return {
    ...useMargins({
      mt,
      mr,
      mb,
      ml,
      mx,
      my,
    }),
    ...usePaddings({
      pt,
      pr,
      pb,
      pl,
      px,
      py,
    }),
  };
};
