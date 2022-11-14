import { Text } from '@/design-system';
import { Section } from '@/shared/ui';

export const VerticalAlign = () => {
  return (
    <Section>
      <Text as="h2" mb={16}>
        Vertical Align
      </Text>

      <div
        // в реальных проектах инлайновые стили запрещены
        style={{
          fontSize: '20px',
          lineHeight: 1.8,
        }}
      >
        <Text vericalAlign="baseline">baseline</Text>
        <Text vericalAlign="top">top</Text>
        <Text vericalAlign="middle">middle</Text>
        <Text vericalAlign="bottom">bottom</Text>
        <Text vericalAlign="textTop">text-top</Text>
        <Text vericalAlign="textBottom">text-bottom</Text>
      </div>
    </Section>
  );
};
