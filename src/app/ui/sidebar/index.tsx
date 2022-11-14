import { Link } from 'react-router-dom';
import { Box, Text, Stack } from '@/design-system';
import { CONFIG } from '@/app/config';
import styles from './styles.module.scss';

export const Sidebar = () => {
  return (
    <Box as="aside" className={styles.sidebar} pl={28}>
      <nav>
        <Text variant="body1">Typography</Text>
        <Box as={Link} to={CONFIG.HOME.LINK} display="flex" mb={16}>
          typography
        </Box>

        <Text variant="body1">Buttons</Text>
        <Box as={Link} to={CONFIG.BUTTONS.LINK} display="flex" mb={16}>
          buttons
        </Box>

        <Text variant="body1">Grid</Text>
        <Box as={Link} to={CONFIG.GRID.LINK} display="flex" mb={16}>
          grid
        </Box>

        <Text variant="body1">Position</Text>
        <Box as={Link} to={CONFIG.POSITION.LINK} display="flex" mb={16}>
          position
        </Box>

        <Stack gap={4} mb={16}>
          <Text variant="body1">Form</Text>

          <Box as={Link} to={CONFIG.SIMPLE_FORM.LINK}>
            simple form
          </Box>

          <Box
            as={Link}
            to={CONFIG.FOMRM_WITH_NESTED_FIELDS.LINK}
            display="flex"
          >
            form with nested fields
          </Box>

          <Box as={Link} to={CONFIG.BROKEN_FORM.LINK}>
            broken form
          </Box>
        </Stack>

        <Text variant="body1">Overlay</Text>

        <Box as={Link} to={CONFIG.OVERLAY.LINK} display="flex">
          overlay
        </Box>
      </nav>
    </Box>
  );
};
