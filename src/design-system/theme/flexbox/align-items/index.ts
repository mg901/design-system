import './styles.scss';

export interface AlignItemsProps {
  alignItems?: 'start' | 'center' | 'end' | 'baseline' | 'stretch';
}

export const useAlignItems = ({ alignItems }: AlignItemsProps) => ({
  'align-items-start': alignItems === 'start',
  'align-items-center': alignItems === 'center',
  'align-items-end': alignItems === 'end',
  'align-items-baseline': alignItems === 'baseline',
  'align-items-stretch': alignItems === 'stretch',
});
