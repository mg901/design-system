import { Box, Text, Form, Row, Col } from '@/design-system';
import { ConnectForm } from '@/shared/react-hook-form';
import { FormValues } from './types';

export const ToWhom = () => {
  return (
    <ConnectForm<FormValues>>
      {({ register, formState: { errors } }) => {
        return (
          <>
            <Text as="h2">Кому</Text>

            <Box as="fieldset">
              <Form.FloatingLabel text="Название организации">
                <Form.Input
                  {...register('name')}
                  placeholder="Название организации"
                  hint={errors?.name?.message}
                  withError={!!errors?.name}
                />
              </Form.FloatingLabel>

              <Row>
                <Col>
                  <Form.FloatingLabel text="ИНН">
                    <Form.Input
                      {...register('inn')}
                      placeholder="Инн"
                      hint={errors?.inn?.message}
                      withError={!!errors?.inn}
                    />
                  </Form.FloatingLabel>
                </Col>
                <Col>
                  <Form.FloatingLabel text="КПП">
                    <Form.Input
                      {...register('kpp')}
                      placeholder="КПП"
                      hint={errors?.kpp?.message}
                      withError={!!errors?.kpp}
                    />
                  </Form.FloatingLabel>
                </Col>
              </Row>

              <Form.FloatingLabel text="Номер счёта">
                <Form.Input
                  placeholder="Номер счёта"
                  {...register('accountNumber')}
                  hint={errors?.accountNumber?.message}
                  withError={!!errors?.accountNumber}
                />
              </Form.FloatingLabel>
            </Box>
          </>
        );
      }}
    </ConnectForm>
  );
};
