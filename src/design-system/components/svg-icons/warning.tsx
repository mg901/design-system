import { SVGIcon, SvgIconProps } from './svg-icon';

export const IconWarning = ({
  dataTestId = 'icon-warning',
  ...props
}: SvgIconProps) => {
  return (
    <SVGIcon data-test-id={dataTestId} {...props}>
      <path d="M8.92212 11.2228C8.92212 11.732 8.50933 12.1448 8.00012 12.1448C7.49092 12.1448 7.07812 11.732 7.07812 11.2228C7.07812 10.7136 7.49092 10.3008 8.00012 10.3008C8.50933 10.3008 8.92212 10.7136 8.92212 11.2228Z" />
      <path d="M7.46159 3.90625C7.05537 3.90625 6.74358 4.26645 6.80181 4.66848L7.4225 8.95389C7.44625 9.11782 7.58676 9.23945 7.7524 9.23945H8.24683C8.41246 9.23945 8.55297 9.11782 8.57672 8.95389L9.19741 4.66848C9.25564 4.26645 8.94385 3.90625 8.53763 3.90625H7.46159Z" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 8C0 3.58172 3.58172 0 8 0C12.4183 0 16 3.58172 16 8C16 12.4183 12.4183 16 8 16C3.58172 16 0 12.4183 0 8ZM8 1.33333C4.3181 1.33333 1.33333 4.3181 1.33333 8C1.33333 11.6819 4.3181 14.6667 8 14.6667C11.6819 14.6667 14.6667 11.6819 14.6667 8C14.6667 4.3181 11.6819 1.33333 8 1.33333Z"
      />
    </SVGIcon>
  );
};
