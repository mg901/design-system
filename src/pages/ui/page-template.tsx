import { Container, Text } from '@/design-system';

type Props = Readonly<{
  title: string;
  children: React.ReactNode;
}>;

export const PageTemplate = ({ title, children }: Props) => {
  return (
    <Container pb={40}>
      <Text as="h1">{title}</Text>
      {children}
    </Container>
  );
};
