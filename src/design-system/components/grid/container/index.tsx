import { forwardRef } from 'react';
import { clsx } from 'clsx';
import {
  BaseElementProps,
  AsProp,
  PolymorphicPropsWithRef,
} from '@/design-system/types';
import { useSpacings, SpacingProps } from '@/design-system/theme/spacing';
import './styles.scss';

export interface ContainerProps
  extends BaseElementProps,
    AsProp,
    SpacingProps,
    React.HTMLAttributes<HTMLDivElement> {
  fluid?: boolean;
}

const defaultElement = 'div';

export const Container: PolymorphicPropsWithRef<
  typeof defaultElement,
  Readonly<ContainerProps>
> = forwardRef<HTMLDivElement, ContainerProps>(
  (
    {
      as: Component = defaultElement,
      className,
      dataTestId,
      fluid,
      mt,
      mr,
      mb,
      ml,
      mx,
      my,
      pt,
      pr,
      pb,
      pl,
      px,
      py,
      children,
      ...props
    },
    ref,
  ) => {
    const spacingClassNames = useSpacings({
      mt,
      mr,
      mb,
      ml,
      mx,
      my,
      pt,
      pr,
      pb,
      pl,
      px,
      py,
    });
    return (
      <Component
        {...props}
        ref={ref}
        data-test-id={dataTestId}
        className={clsx(fluid ? 'container-fluid' : 'container', className, {
          ...spacingClassNames,
        })}
      >
        {children}
      </Component>
    );
  },
);

Container.displayName = 'Container';
