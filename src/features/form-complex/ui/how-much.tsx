import { Box, Text, Form, Row, Col } from '@/design-system';
import { ConnectForm } from '@/shared/react-hook-form';
import { FormValues } from './types';

export const HowMuch = () => {
  return (
    <ConnectForm<FormValues>>
      {({ register, formState: { errors } }) => {
        return (
          <>
            <Text as="h2">Сколько и за что</Text>
            <Box as="fieldset">
              <Form.FloatingLabel text="Источник платежа">
                <Form.Input
                  {...register('sourcePayment')}
                  placeholder="Источник платежа"
                  hint={errors?.sourcePayment?.message}
                  withError={!!errors?.sourcePayment}
                />
              </Form.FloatingLabel>
              <Row>
                <Col xs="6">
                  <Form.FloatingLabel text="Сумма">
                    <Form.Input
                      {...register('sum')}
                      placeholder="Сумма"
                      hint={errors?.sum?.message}
                      withError={!!errors?.sum}
                    />
                  </Form.FloatingLabel>
                </Col>
              </Row>
              <Form.FloatingLabel text="Назначение">
                <Form.Control
                  as="textarea"
                  {...register('appointment')}
                  placeholder="Назначение"
                  variant={errors?.appointment && 'invalid'}
                />
                {errors?.appointment && (
                  <Form.Control.Feedback variant="invalid">
                    {errors?.appointment?.message}
                  </Form.Control.Feedback>
                )}
              </Form.FloatingLabel>
            </Box>
          </>
        );
      }}
    </ConnectForm>
  );
};
