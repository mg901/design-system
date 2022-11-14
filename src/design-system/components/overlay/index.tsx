import { forwardRef } from 'react';
import { clsx } from 'clsx';
import {
  BaseElementProps,
  AsProp,
  PolymorphicPropsWithRef,
} from '@/design-system/types';
import styles from './styles.module.scss';

export interface OverlayProps
  extends BaseElementProps,
    AsProp,
    React.HTMLAttributes<HTMLDivElement> {
  opened: boolean;
  onClose?: () => void;
}

const defaultElement = 'div';

export const Overlay: PolymorphicPropsWithRef<
  typeof defaultElement,
  OverlayProps
> = forwardRef<HTMLDivElement, OverlayProps>(
  (
    {
      dataTestId,
      as: Component = defaultElement,
      className,
      onClose,
      opened,
      children,
      ...props
    },
    ref,
  ) => {
    return (
      <Component
        {...props}
        ref={ref}
        data-test-id={dataTestId}
        data-state={opened}
        className={clsx(styles.overlay, className)}
        onClick={onClose}
      >
        {children}
      </Component>
    );
  },
);
