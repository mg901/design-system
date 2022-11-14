import { clsx } from 'clsx';
import { BaseElementProps } from '@/design-system/types';
import './styles.scss';

const SIZES = {
  sm: 'sm',
  md: 'md',
  lg: 'lg',
} as const;

const COLORS = {
  primary: 'primary',
  secondary: 'secondary',
  success: 'success',
  danger: 'danger',
  warning: 'warning',
  white: 'white',
} as const;

type OwnProps = Partial<{
  size: keyof typeof SIZES;
  color: keyof typeof COLORS;
}>;

export interface SvgIconProps
  extends Omit<React.SVGProps<SVGSVGElement>, 'color'>,
    BaseElementProps,
    OwnProps {}

export const SVGIcon = ({
  children,
  className,
  size = SIZES.md,
  color = COLORS.primary,
  viewBox = '0 0 16 16',
  dataTestId = 'svg-icon',
}: SvgIconProps) => {
  return (
    <svg
      viewBox={viewBox}
      focusable={false}
      className={clsx(
        'svg-icon',
        className,
        size && size !== SIZES.md && size,
        color && color !== COLORS.primary && color,
      )}
      data-test-id={dataTestId}
      xmlns="http://www.w3.org/2000/svg"
    >
      {children}
    </svg>
  );
};
