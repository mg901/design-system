import './styles.scss';

export interface FlexDirectionProps {
  flexDirection?: 'row' | 'row-reverse' | 'column' | 'column-reverse';
}

export const useFlexDirection = ({ flexDirection }: FlexDirectionProps) => ({
  'flex-row': flexDirection === 'row',
  'flex-row-reverse': flexDirection === 'row-reverse',
  'flex-column': flexDirection === 'column',
  'flex-column-reverse': flexDirection === 'column-reverse',
});
