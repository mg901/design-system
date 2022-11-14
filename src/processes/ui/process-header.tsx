import { useNavigate } from 'react-router-dom';
import {
  Box,
  ButtonCircle,
  IconArrowLeft,
  Text,
  IconClose,
} from '@/design-system';
import { ProcessContainer } from './process-container';

type ProcessHeaderProps = {
  title: string;
  onClose: () => void;
};

const LOCATION_DELTA = -1;

export const ProcessHeader = ({ title, onClose }: ProcessHeaderProps) => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(LOCATION_DELTA);
  };

  return (
    <header>
      <ProcessContainer
        as={Box}
        display="flex"
        justifyContent="between"
        pt={40}
        pb={32}
      >
        <ButtonCircle onClick={handleBack}>
          <IconArrowLeft size="lg" />
        </ButtonCircle>

        <Text as="h1" my={0}>
          {title}
        </Text>

        <ButtonCircle onClick={onClose}>
          <IconClose size="lg" />
        </ButtonCircle>
      </ProcessContainer>
    </header>
  );
};
