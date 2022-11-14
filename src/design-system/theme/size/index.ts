import { useWidth, WidthProps } from './width';
import { useHeight, HeightProps } from './height';

export * from './height';
export * from './width';

export interface SizeProps extends WidthProps, HeightProps {}

export const useSize = ({
  width,
  vw,
  minVw,

  // heigth
  height,
  maxHeight,
  vh,
  minVh,
}: SizeProps) => {
  return {
    ...useWidth({
      width,
      vw,
      minVw,
    }),
    ...useHeight({
      height,
      maxHeight,
      vh,
      minVh,
    }),
  };
};
