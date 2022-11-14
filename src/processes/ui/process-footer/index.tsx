import { ProcessContainer } from '../process-container';
import { Stack } from '@/design-system';

import styles from './styles.module.scss';

type Props = {
  children: React.ReactNode;
};

export const ProcessFooter = ({ children }: Props) => {
  return (
    <div className={styles.footer}>
      <ProcessContainer as={Stack} direction="horizontal" gap={20} py={16}>
        {children}
      </ProcessContainer>
    </div>
  );
};
