import { useLocation, useNavigate } from 'react-router-dom';
import { Button, Container } from '@/design-system';
import { ProcessTemplate } from '@/processes/ui/process-template';

export const ViewStep = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleReset = () => {
    navigate(location.pathname, {
      state: {
        activeStep: 0,
      },
    });
  };

  return (
    <ProcessTemplate.Content>
      <Container></Container>
      <ProcessTemplate.Footer>
        <Button variant="danger">Удалить</Button>
        <Button variant="warning" mr="auto">
          Редактировать
        </Button>
        <Button onClick={handleReset}>Повторить</Button>
      </ProcessTemplate.Footer>
    </ProcessTemplate.Content>
  );
};
