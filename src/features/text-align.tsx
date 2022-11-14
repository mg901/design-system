import { Text } from '@/design-system';
import { Section } from '@/shared/ui';

export const TextAlign = () => {
  return (
    <Section>
      <Text as="h2">Text Align</Text>

      <Text as="div">align left</Text>
      <Text as="div" textAlign="center">
        align center
      </Text>
      <Text as="div" textAlign="right">
        align right
      </Text>
    </Section>
  );
};
