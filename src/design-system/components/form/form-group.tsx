import { forwardRef, useMemo } from 'react';
import { clsx } from 'clsx';
import { FormContext } from './form-context';
import { useSpacings, SpacingProps } from '@/design-system/theme/spacing';
import {
  BaseElementProps,
  AsProp,
  PolymorphicPropsWithRef,
} from '@/design-system/types';

export interface FormGroupProps
  extends BaseElementProps,
    AsProp,
    SpacingProps,
    React.HTMLAttributes<HTMLDivElement> {
  controlId?: string;
}

const defaultElement = 'div' as const;

export const FormGroup: PolymorphicPropsWithRef<
  typeof defaultElement,
  FormGroupProps
> = forwardRef<HTMLDivElement, FormGroupProps>(
  (
    {
      as: Component = defaultElement,
      children,
      controlId,
      className,
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
      dataTestId,
      ...props
    }: FormGroupProps,
    ref,
  ) => {
    const context = useMemo(() => ({ controlId }), [controlId]);
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
      <FormContext.Provider value={context}>
        <Component
          {...props}
          ref={ref}
          data-test-id={dataTestId}
          className={clsx('form-group', className, {
            ...spacingClassNames,
          })}
        >
          {children}
        </Component>
      </FormContext.Provider>
    );
  },
);

FormGroup.displayName = 'FormGroup';
