export interface AlignSelfProps {
  alignSelf?: 'auto' | 'start' | 'end' | 'center' | 'baseline' | 'stretch';
}

export const useAlignSelf = ({ alignSelf }: AlignSelfProps) => ({
  'align-self-start': alignSelf === 'start',
  'align-self-center': alignSelf === 'center',
  'align-self-end': alignSelf === 'end',
  'align-self-baseline': alignSelf === 'baseline',
  'align-self-stretch': alignSelf === 'end',
});
