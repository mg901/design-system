import { useStepContext } from '../step-context';
import { IconCircleCompleted } from '@/design-system';
import styles from './styles.module.scss';

type Props = {
  children: React.ReactNode;
};

export const StepIcon = ({ children }: Props) => {
  const { active, completed } = useStepContext();

  return (
    <span
      className={styles.icon}
      data-active={active}
      data-completed={completed}
    >
      {completed ? <IconCircleCompleted /> : children}
    </span>
  );
};
