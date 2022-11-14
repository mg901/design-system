import { Box } from '@/design-system';

type Props = {
  children: React.ReactNode;
};

export const ProcessContent = ({ children }: Props) => {
  return (
    <Box
      position="relative"
      display="flex"
      flexDirection="column"
      flexFill
      overflow="auto"
      pb={132}
    >
      {children}
    </Box>
  );
};
