import './styles.scss';

export interface JustifyContentProps {
  justifyContent?: 'start' | 'center' | 'end' | 'between' | 'around' | 'evenly';
}

export const useJustifyContent = ({ justifyContent }: JustifyContentProps) => ({
  [`justify-content-${justifyContent}`]: justifyContent,
});
