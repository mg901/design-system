import { useMemo } from 'react';
import { useGap, GapProps } from '../spacing/gap';
import { useFlexDirection, FlexDirectionProps } from './flex-direction';
import { useFlexWrap, FlexWrapProps } from './flex-wrap';
import { useJustifyContent, JustifyContentProps } from './justify-content';
import { useAlignItems, AlignItemsProps } from './align-items';
import { useAlignContent, AlignContentProps } from './align-content';
import { useAlignSelf, AlignSelfProps } from './align-self';
import './styles.scss';

type Order =
  | 'first'
  | 'last'
  | 1
  | 2
  | 3
  | 4
  | 5
  | 6
  | '1'
  | '2'
  | '3'
  | '4'
  | '5'
  | '6';

type OwnProps = Partial<{
  display: 'flex' | 'inline-flex';
  order: Order;
  flexGrow: 0 | 1 | '0' | '1';
  flexShrink: 0 | 1 | '0' | '1';
  flexFill: boolean;
}>;

export interface FlexboxProps
  extends FlexDirectionProps,
    FlexWrapProps,
    JustifyContentProps,
    AlignItemsProps,
    AlignContentProps,
    AlignSelfProps,
    GapProps,
    OwnProps {}

export const useFlexbox = ({
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
}: FlexboxProps) => {
  const gapClassName = useGap({ gap });
  const directionClassNames = useFlexDirection({ flexDirection });
  const flexWrapClassNames = useFlexWrap({ flexWrap });
  const jusityContentClassNames = useJustifyContent({ justifyContent });
  const alignItemsClassNames = useAlignItems({ alignItems });
  const alignContentClassNames = useAlignContent({ alignContent });
  const alignSelfClassNames = useAlignSelf({ alignSelf });

  return useMemo(
    () => ({
      'display-flex': display === 'flex',
      'display-inline-flex': display === 'inline-flex',
      ...gapClassName,
      ...directionClassNames,
      ...flexWrapClassNames,
      ...jusityContentClassNames,
      ...alignItemsClassNames,
      ...alignContentClassNames,
      ...alignSelfClassNames,
      [`flex-grow-${flexGrow}`]: flexGrow,
      [`flex-shrink-${flexShrink}`]: flexShrink,
      [`order-${order}`]: order,

      // fill
      'flex-fill': flexFill,
    }),
    [
      display,
      gapClassName,
      directionClassNames,
      flexWrapClassNames,
      jusityContentClassNames,
      alignItemsClassNames,
      alignContentClassNames,
      alignSelfClassNames,
      flexGrow,
      flexShrink,
      order,
      flexFill,
    ],
  );
};
