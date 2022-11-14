import { Text } from '@/design-system';
import { Section } from '@/shared/ui';

export const TextWeight = () => {
  return (
    <Section>
      <Text as="h2">Weight</Text>

      <Text as="div" weight="medium" mb={8}>
        упорный труд
      </Text>
      <Text as="div" weight="regular">
        упорный труд
      </Text>
    </Section>
  );
};
