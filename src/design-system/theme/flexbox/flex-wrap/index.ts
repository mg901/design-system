import './styles.scss';

export interface FlexWrapProps {
  flexWrap?: 'wrap' | 'nowrap' | 'wrap-reverse';
}

export const useFlexWrap = ({ flexWrap }: FlexWrapProps) => ({
  'flex-wrap': flexWrap === 'wrap',
  'flex-nowrap': flexWrap === 'nowrap',
  'flex-wrap-reverse': flexWrap === 'wrap-reverse',
});
