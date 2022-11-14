import { SVGIcon, SvgIconProps } from '../../svg-icons/svg-icon';

export const IconText = ({
  dataTestId = 'stepper-icon-text',
  children,
  ...props
}: SvgIconProps) => {
  return (
    <SVGIcon data-test-id={dataTestId} {...props}>
      <circle cx="12" cy="12" r="12"></circle>
      <text x="12" y="12" text-anchor="middle" dominant-baseline="central">
        {children}
      </text>
    </SVGIcon>
  );
};
