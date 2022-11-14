import { Outlet } from 'react-router-dom';
import { Box } from '@/design-system';
import styles from './styles.module.scss';

export const Main = () => {
  return (
    <Box as="main" className={styles.main}>
      <Outlet />
    </Box>
  );
};
