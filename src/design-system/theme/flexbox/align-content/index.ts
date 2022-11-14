export interface AlignContentProps {
  alignContent?: 'center' | 'end' | 'between' | 'around' | 'stretch';
}

export const useAlignContent = ({ alignContent }: AlignContentProps) => ({
  'align-content-end': alignContent === 'end',
  'align-content-center': alignContent === 'center',
  'align-content-between': alignContent === 'between',
  'align-content-around': alignContent === 'around',
  'align-content-stretch': alignContent === 'stretch',
});
