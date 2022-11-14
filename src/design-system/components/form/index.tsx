import { forwardRef } from 'react';
import { clsx } from 'clsx';
import { FormFeedback } from './form-feedback';
import { FormCheck } from './form-check';
import { FormControl } from './form-control';
import { FormGroup } from './form-group';
import { FormLabel } from './form-label';
import { FormText } from './form-text';
import { FormInput } from './form-input';
import { FloatingLabel } from './floating-label';
import { useSpacings, SpacingProps } from '@/design-system/theme/spacing';

import { BaseElementProps } from '@/design-system/types';
import './styles.scss';

export interface FormProps
  extends React.FormHTMLAttributes<HTMLFormElement>,
    BaseElementProps,
    SpacingProps {}

export const FormRoot = forwardRef<HTMLFormElement, FormProps>(
  (
    {
      className,
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
      <form
        {...props}
        ref={ref}
        data-test-id={dataTestId}
        className={clsx('form', className, {
          ...spacingClassNames,
        })}
      >
        {children}
      </form>
    );
  },
);

export const Form = Object.assign(FormRoot, {
  Group: FormGroup,
  Control: FormControl,
  Label: FormLabel,
  FloatingLabel,
  Text: FormText,
  Check: FormCheck,
  Feedback: FormFeedback,
  Input: FormInput,
});
