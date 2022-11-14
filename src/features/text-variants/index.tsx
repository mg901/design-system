import { Text } from '@/design-system';
import { Section } from '@/shared/ui';
import styles from './styles.module.scss';

export const TextVariants = () => {
  return (
    <div className={styles.demo}>
      <Section>
        <Text as="h1" mb={20}>
          Headings
        </Text>

        <Text as="h1">Повседневная практика</Text>
        <Text as="h2">Повседневная практика</Text>
        <Text as="h3">Повседневная практика</Text>
        <Text as="h4">Повседневная практика</Text>
        <Text as="h5">Повседневная практика</Text>
        <Text as="h6">Повседневная практика</Text>
      </Section>

      <Section>
        <Text as="h2">Variants</Text>

        <Text as="div" variant="h1">
          Повседневная практика
        </Text>
        <Text as="div" variant="h2">
          Повседневная практика
        </Text>
        <Text as="div" variant="h3">
          Повседневная практика
        </Text>
        <Text as="div" variant="h4">
          Повседневная практика
        </Text>
        <Text as="div" variant="h5">
          Повседневная практика
        </Text>
        <Text as="div" variant="h6">
          Повседневная практика
        </Text>
        <Text as="div" variant="body1">
          Повседневная практика
        </Text>
        <Text as="div" variant="body2">
          Повседневная практика
        </Text>
        <Text as="div" variant="caption">
          Повседневная практика
        </Text>
      </Section>
    </div>
  );
};
