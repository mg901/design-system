import { forwardRef } from 'react';
import { clsx } from 'clsx';
import { AsProp, PolymorphicPropsWithRef } from '@/design-system/types';
import styles from './styles.module.scss';

export interface OverlayProps
  extends AsProp,
    React.HTMLAttributes<HTMLDivElement> {}

const defaultElement = 'div';

export const ProcessContainer: PolymorphicPropsWithRef<
  typeof defaultElement,
  OverlayProps
> = forwardRef<HTMLDivElement, OverlayProps>(
  ({ as: Component = defaultElement, className, children, ...props }, ref) => {
    return (
      <Component
        {...props}
        ref={ref}
        className={clsx(styles.container, className)}
      >
        {children}
      </Component>
    );
  },
);
