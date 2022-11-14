import { Box, BoxProps } from '@/design-system';
import './styles.scss';

export const Square = (props: BoxProps) => {
  return <Box {...props} className="square" />;
};
