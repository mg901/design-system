import { Text, Stack } from '@/design-system';
import { Section } from '@/shared/ui';

export const TextColors = () => {
  return (
    <>
      <Section>
        <Text as="h2">Цвет</Text>

        <Text>primary</Text>
        <Stack direction="horizontal" gap={16}>
          <Text color="secondary">secondary</Text>
          <Text color="success">success</Text>
          <Text color="danger">danger</Text>
          <Text color="warning">warning</Text>
          <Text color="info">info</Text>
          <Text color="muted">muted</Text>
        </Stack>
      </Section>
      <Section>
        <Text as="h2">Text as wrapper</Text>

        <Text as="div" color="secondary">
          <Stack direction="horizontal" gap={16}>
            <Text>secondary</Text>
            <Text>success</Text>
            <Text>danger</Text>
            <Text>warning</Text>
            <Text>info</Text>
            <Text>muted</Text>
          </Stack>
        </Text>

        <Text as="div" color="success">
          <Stack direction="horizontal" gap={16}>
            <Text>secondary</Text>
            <Text>success</Text>
            <Text>danger</Text>
            <Text>warning</Text>
            <Text>info</Text>
            <Text>muted</Text>
          </Stack>
        </Text>

        <Text as="div" color="danger">
          <Stack direction="horizontal" gap={16}>
            <Text>secondary</Text>
            <Text>success</Text>
            <Text>danger</Text>
            <Text>warning</Text>
            <Text>info</Text>
            <Text>muted</Text>
          </Stack>
        </Text>

        <Text as="div" color="warning">
          <Stack direction="horizontal" gap={16}>
            <Text>secondary</Text>
            <Text>success</Text>
            <Text>danger</Text>
            <Text>warning</Text>
            <Text>info</Text>
            <Text>muted</Text>
          </Stack>
        </Text>

        <Text as="div" color="info">
          <Stack direction="horizontal" gap={16}>
            <Text>secondary</Text>
            <Text>success</Text>
            <Text>danger</Text>
            <Text>warning</Text>
            <Text>info</Text>
            <Text>muted</Text>
          </Stack>
        </Text>

        <Text as="div" color="muted">
          <Stack direction="horizontal" gap={16}>
            <Text>secondary</Text>
            <Text>success</Text>
            <Text>danger</Text>
            <Text>warning</Text>
            <Text>info</Text>
            <Text>muted</Text>
          </Stack>
        </Text>
      </Section>
    </>
  );
};
