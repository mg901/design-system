import { Text } from '@/design-system';
import { useStepContext } from '../step-context';
import styles from './styles.module.scss';

type Props = {
  children: string;
};

export const StepLabel = ({ children }: Props) => {
  const { active, completed } = useStepContext();

  return (
    <Text
      variant="body2"
      className={styles.label}
      data-active={active}
      data-completed={completed}
    >
      {children}
    </Text>
  );
};
