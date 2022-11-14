import { useLocation, useNavigate } from 'react-router-dom';
import { Container, Button } from '@/design-system';
import { FormBroken } from '@/features/form-broken';
import { ProcessTemplate } from '@/processes/ui/process-template';

const FORM_ID = 'payment-order-form';

export const PaymentOrderStep = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
  };

  const handleNext = () => {
    navigate(location.pathname, {
      state: {
        activeStep: 1,
      },
    });
  };

  return (
    <>
      <ProcessTemplate.Content>
        <Container>
          <FormBroken />
        </Container>
      </ProcessTemplate.Content>
      <ProcessTemplate.Footer>
        <Button type="submit" form={FORM_ID} variant="secondary" mr="auto">
          Сохранить
        </Button>

        <Button onClick={handleNext}>Продолжить</Button>
      </ProcessTemplate.Footer>
    </>
  );
};
