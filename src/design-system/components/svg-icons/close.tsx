import { SVGIcon, SvgIconProps } from './svg-icon';

export const IconClose = ({
  dataTestId = 'icon-close',
  ...props
}: SvgIconProps) => {
  return (
    <SVGIcon data-test-id={dataTestId} {...props}>
      <path d="M12.607 4.33767C12.8673 4.07732 12.8673 3.65521 12.607 3.39486C12.3466 3.13451 11.9245 3.13451 11.6642 3.39486L8.00208 7.05695L4.33778 3.39265C4.07743 3.1323 3.65532 3.1323 3.39497 3.39265C3.13462 3.653 3.13462 4.07511 3.39497 4.33546L7.05927 7.99976L3.39497 11.6641C3.13462 11.9244 3.13462 12.3465 3.39497 12.6069C3.65532 12.8672 4.07743 12.8672 4.33778 12.6069L8.00208 8.94257L11.6642 12.6047C11.9245 12.865 12.3466 12.865 12.607 12.6047C12.8673 12.3443 12.8673 11.9222 12.607 11.6619L8.94489 7.99976L12.607 4.33767Z" />
    </SVGIcon>
  );
};