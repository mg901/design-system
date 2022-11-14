import { forwardRef } from 'react';
import clsx from 'clsx';
import { BaseElementProps } from '@/design-system/types';
import { useSpacings, SpacingProps } from '@/design-system/theme/spacing';
import '../button-base/styles.scss';
import './styles.scss';

interface ButtonCircleProps
  extends BaseElementProps,
    SpacingProps,
    React.ButtonHTMLAttributes<HTMLButtonElement> {}

export const ButtonCircle = forwardRef<HTMLButtonElement, ButtonCircleProps>(
  (
    {
      dataTestId,
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
      className,
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
      <button
        {...props}
        ref={ref}
        data-test-id={dataTestId}
        className={clsx('btn-base', 'btn-circle', className, {
          ...spacingClassNames,
        })}
      >
        {children}
      </button>
    );
  },
);
