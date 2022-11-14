/* eslint @typescript-eslint/no-use-before-define: 0 */
import { forwardRef, useMemo } from 'react';
import { clsx } from 'clsx';
import { useSpacings, SpacingProps } from '@/design-system/theme/spacing';
import { useFlexbox, FlexboxProps } from '@/design-system/theme/flexbox';
import { useSize, SizeProps } from '@/design-system/theme/size';
import { usePosition, PositionProps } from '@/design-system/theme/position';
import { useBorder, BorderProps } from '@/design-system/theme/border';
import { useBoxShadow, BoxShadowProps } from '@/design-system/theme/box-shadow';
import { useOverflow, OverflowProps } from '@/design-system/theme/overflow';
import { BgColorProps } from '@/design-system/theme/colors';
import {
  Align,
  BaseElementProps,
  AsProp,
  PolymorphicPropsWithRef,
} from '@/design-system/types';

type OwnProps = Partial<{
  align: Align;
}>;

export interface BoxProps
  extends BaseElementProps,
    AsProp,
    PositionProps,
    SpacingProps,
    FlexboxProps,
    SizeProps,
    BorderProps,
    BoxShadowProps,
    OverflowProps,
    BgColorProps,
    Omit<React.HTMLAttributes<HTMLDivElement>, 'translate'>,
    OwnProps {}

const defaultElement = 'div';

export const Box: PolymorphicPropsWithRef<
  typeof defaultElement,
  BoxProps
> = forwardRef<HTMLDivElement, BoxProps>(
  ({ as: Component = defaultElement, dataTestId, children, ...props }, ref) => {
    const { className, ...boxProps } = useBox(props);

    return (
      <Component
        {...boxProps}
        ref={ref}
        data-test-id={dataTestId}
        className={className}
      >
        {children}
      </Component>
    );
  },
);

Box.displayName = 'Box';

function useBox({
  // position
  position,
  start,
  end,
  top,
  bottom,
  translate,

  // margins
  mt,
  mr,
  mb,
  ml,
  mx,
  my,

  // paddings
  pt,
  pr,
  pb,
  pl,
  px,
  py,

  // flexbox
  display,
  flexDirection,
  flexWrap,
  justifyContent,
  alignItems,
  alignContent,
  order,
  flexGrow,
  flexShrink,
  alignSelf,
  flexFill,
  gap,

  // width
  width,
  vw,
  minVw,

  // heigth
  height,
  maxHeight,
  vh,
  minVh,
  borderRadius,
  boxShadow,

  // overflow
  overflow,
  ...props
}: BoxProps) {
  const positionClassNames = usePosition({
    position,
    start,
    end,
    top,
    bottom,
    translate,
  });
  const spacingClassNames = useSpacings({
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
  });

  const flexboxClassNames = useFlexbox({
    display,
    flexDirection,
    flexWrap,
    justifyContent,
    alignItems,
    alignContent,
    order,
    flexGrow,
    flexShrink,
    alignSelf,
    flexFill,
    gap,
  });

  const sizeClassNames = useSize({
    width,
    vw,
    minVw,
    height,
    maxHeight,
    vh,
    minVh,
  });

  const borderClassNames = useBorder({
    borderRadius,
  });

  const shadowClassNames = useBoxShadow({
    boxShadow,
  });

  const overflowClassNames = useOverflow({
    overflow,
  });

  const classNames = useMemo(
    () => ({
      ...positionClassNames,
      ...spacingClassNames,
      ...flexboxClassNames,
      ...sizeClassNames,
      ...borderClassNames,
      ...shadowClassNames,
      ...overflowClassNames,
    }),
    [
      positionClassNames,
      spacingClassNames,
      flexboxClassNames,
      sizeClassNames,
      borderClassNames,
      shadowClassNames,
      overflowClassNames,
    ],
  );

  return {
    ...props,
    className: clsx(props.className, classNames),
  };
}
