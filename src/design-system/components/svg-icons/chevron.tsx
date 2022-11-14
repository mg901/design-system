import { SVGIcon, SvgIconProps } from './svg-icon';

export const IconChevronUp = ({
  dataTestId = 'icon-chevron-up',
  ...props
}: SvgIconProps) => {
  return (
    <SVGIcon data-test-id={dataTestId} {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3.24116 10.3086C3.50151 10.569 3.92362 10.569 4.18397 10.3086L8.00035 6.49227L11.8167 10.3086C12.0771 10.569 12.4992 10.569 12.7595 10.3086C13.0199 10.0483 13.0199 9.62618 12.7595 9.36584L8.47175 5.07805C8.2114 4.8177 7.78929 4.8177 7.52894 5.07805L3.24116 9.36584C2.98081 9.62618 2.98081 10.0483 3.24116 10.3086Z"
      />
    </SVGIcon>
  );
};

export const IconChevronRight = ({
  dataTestId = 'icon-chevron-right',
  ...props
}: SvgIconProps) => {
  return (
    <SVGIcon data-test-id={dataTestId} {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.69136 3.24018C5.43101 3.50053 5.43101 3.92264 5.69136 4.18299L9.50773 7.99937L5.69136 11.8157C5.43101 12.0761 5.43101 12.4982 5.69136 12.7586C5.9517 13.0189 6.37382 13.0189 6.63416 12.7586L10.9219 8.47078C11.1823 8.21043 11.1823 7.78832 10.9219 7.52797L6.63417 3.24018C6.37382 2.97983 5.95171 2.97983 5.69136 3.24018Z"
      />
    </SVGIcon>
  );
};

export const IconChevronDown = ({
  dataTestId = 'icon-chevron-down',
  ...props
}: SvgIconProps) => {
  return (
    <SVGIcon data-test-id={dataTestId} {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3.24116 5.69136C3.50151 5.43101 3.92362 5.43101 4.18397 5.69136L8.00035 9.50773L11.8167 5.69136C12.0771 5.43101 12.4992 5.43101 12.7595 5.69136C13.0199 5.95171 13.0199 6.37382 12.7595 6.63416L8.47175 10.9219C8.2114 11.1823 7.78929 11.1823 7.52894 10.9219L3.24116 6.63416C2.98081 6.37382 2.98081 5.95171 3.24116 5.69136Z"
      />
    </SVGIcon>
  );
};

export const IconChevronLeft = ({
  dataTestId = 'icon-chevron-left',
  ...props
}: SvgIconProps) => {
  return (
    <SVGIcon data-test-id={dataTestId} {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.3086 12.7598C10.569 12.4995 10.569 12.0774 10.3086 11.817L6.49227 8.00063L10.3086 4.18425C10.569 3.9239 10.569 3.50179 10.3086 3.24144C10.0483 2.98109 9.62618 2.98109 9.36583 3.24144L5.07805 7.52922C4.8177 7.78957 4.8177 8.21168 5.07805 8.47203L9.36583 12.7598C9.62618 13.0202 10.0483 13.0202 10.3086 12.7598Z"
      />
    </SVGIcon>
  );
};
