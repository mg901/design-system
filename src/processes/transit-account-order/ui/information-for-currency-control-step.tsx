import { useLocation, useNavigate } from 'react-router-dom';
import { Container, Form, Button } from '@/design-system';
import { ProcessTemplate } from '@/processes/ui/process-template';

const FORM_ID = 'information-for-currency-control';

export const InformationForCurrencyControlStep = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
  };

  const handleNext = () => {
    navigate(location.pathname, {
      state: {
        activeStep: 2,
      },
    });
  };

  return (
    <ProcessTemplate.Content>
      <Container>
        <Form id={FORM_ID} onSubmit={handleSubmit}></Form>
      </Container>
      <ProcessTemplate.Footer>
        <Button type="submit" form={FORM_ID} variant="secondary" mr="auto">
          Сохранить
        </Button>

        <Button onClick={handleNext}>Подписаться и отправить</Button>
      </ProcessTemplate.Footer>
    </ProcessTemplate.Content>
  );
};
