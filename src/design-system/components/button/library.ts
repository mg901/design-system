
/* eslint @typescript-eslint/no-use-before-define: 0 */
export type ButtonType = 'button' | 'reset' | 'submit';

export type BaseButtonProps = Partial<{
  as: keyof JSX.IntrinsicElements | undefined;
  disabled: boolean | undefined;

  /** Optionally specify an href to render a `<a>` tag styled as a button */
  href: string | undefined;

  /** Anchor target, when rendering an anchor as a button */
  target: string | undefined;

  rel: string | undefined;
}>

type AnchorProps = Partial<{
  href: string;
  rel: string;
  target: string;
}>

export interface ButtonProps
  extends BaseButtonProps,
    React.ComponentPropsWithoutRef<'button'> {}


type OwnProps = Partial<{
  type: ButtonType;
  disabled: boolean;
  role: React.AriaRole;
  tabIndex: number;
  onClick: React.EventHandler<React.MouseEvent | React.KeyboardEvent>;
  tagName: keyof JSX.IntrinsicElements;
}>

export interface UseButtonPropsOptions extends AnchorProps, OwnProps {}

export type AriaButtonProps =  Partial<{
  type: ButtonType;
  disabled: boolean;
  role: React.AriaRole;
  tabIndex: number;
  href: string;
  target: string;
  rel: string;
  'aria-disabled': true;
  onClick: (event: React.MouseEvent | React.KeyboardEvent) => void;
  onKeyDown: (event: React.KeyboardEvent) => void;
}>

export type UseButtonPropsMetadata =  {
  tagName: React.ElementType;
}

export function useButtonProps({
  tagName,
  disabled,
  href,
  target,
  rel,
  role,
  onClick,
  tabIndex = 0,
  type,
}: UseButtonPropsOptions): [React.ElementType, AriaButtonProps] {
  if (!tagName) {
    if (href != null || target != null || rel != null) {
      tagName = 'a';
    } else {
      tagName = 'button';
    }
  }

  if (tagName === 'button') {
    return [tagName, { type: (type as any) || 'button', disabled }];
  }

  const handleClick = (event: React.MouseEvent | React.KeyboardEvent) => {
    if (disabled || (tagName === 'a' && isTrivialHref(href))) {
      event.preventDefault();
    }

    if (disabled) {
      event.stopPropagation();
      return;
    }

    onClick?.(event);
  };

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === ' ') {
      event.preventDefault();
      handleClick(event);
    }
  };

  if (tagName === 'a') {
    // Ensure there's a href so Enter can trigger anchor button.
    href ||= '#';
    if (disabled) {
      href = undefined;
    }
  }

  return [tagName,
    {
      role: role ?? 'button',
      // explicitly undefined so that it overrides the props disabled in a spread
      // e.g. <Tag {...props} {...hookProps} />
      disabled: undefined,
      tabIndex: disabled ? undefined : tabIndex,
      href,
      target: tagName === 'a' ? target : undefined,
      'aria-disabled': !disabled ? undefined : disabled,
      rel: tagName === 'a' ? rel : undefined,
      onClick: handleClick,
      onKeyDown: handleKeyDown
    }
  ]
}

function isTrivialHref (href?: string) {
  return !href || href.trim() === '#';
}

