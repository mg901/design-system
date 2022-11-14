import { SVGIcon, SvgIconProps } from './svg-icon';

export const IconCircleCompleted = ({
  dataTestId = 'icon-circle-completed',
  ...props
}: SvgIconProps) => {
  return (
    <SVGIcon data-test-id={dataTestId} {...props} color="white">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13.2339 4.07028C13.4986 4.32619 13.5058 4.74824 13.2499 5.01296L6.57911 11.9135C6.44945 12.0477 6.26951 12.1213 6.083 12.1166C5.8965 12.1119 5.7205 12.0293 5.59775 11.8888L2.7286 8.60485C2.48635 8.32758 2.51474 7.90642 2.79201 7.66417C3.06928 7.42193 3.49044 7.45032 3.73268 7.72759L6.12461 10.4653L12.2912 4.08625C12.5471 3.82153 12.9692 3.81438 13.2339 4.07028Z"
      />
    </SVGIcon>
  );
};
