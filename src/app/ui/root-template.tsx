import { ThemeProvider, Container, Box } from '@/design-system';
import { Sidebar } from './sidebar';
import { Header } from './header';
import { Main } from './main';

export const RootTemplate = () => {
  return (
    <ThemeProvider>
      <Box vh={100} position="relative" display="flex" flexDirection="column">
        <Header />
        <Container as={Box} display="flex" fluid flexFill>
          <Sidebar />
          <Main />
        </Container>
      </Box>
    </ThemeProvider>
  );
};
