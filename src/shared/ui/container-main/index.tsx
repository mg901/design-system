import { Box, BoxProps } from '@/design-system';

import styles from './styles.module.scss';

export const ContainerMain = ({ children }: BoxProps) => {
  return (
    <Box className={styles.container} overflow="auto">
      {children}
    </Box>
  );
};
