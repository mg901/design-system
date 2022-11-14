import { BoxProps } from '@/design-system';
import './styles.scss';

export const Rectangle = ({ children, ...props }: BoxProps) => {
  return <div className="rectangle">{children}</div>;
};
