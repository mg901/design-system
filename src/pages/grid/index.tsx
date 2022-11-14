/* eslint @typescript-eslint/no-use-before-define: 0 */
import { Container, ContainerProps, Text } from '@/design-system';
import { GridColumns } from '@/features/grid-columns';
import styles from './styles.module.scss';

const GridPage = () => {
  return (
    <ExampleContainer mb={80}>
      <Text as="h1">Колонки</Text>
      <GridColumns />
    </ExampleContainer>
  );
};

export default GridPage;

function ExampleContainer({ children, ...props }: ContainerProps) {
  return (
    <Container fluid className={styles.demo} {...props}>
      {children}
    </Container>
  );
}
