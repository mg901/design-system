import { Box, Text, Form, Row, Col } from '@/design-system';
import { ConnectForm } from '@/shared/react-hook-form';
import { FormValues } from './types';

export const Bank = () => {
  return (
    <ConnectForm<FormValues>>
      {({ register, formState: { errors } }) => {
        return (
          <>
            <Text as="h2">Банк</Text>
            <Box as="fieldset">
              <Row>
                <Col>
                  <Form.FloatingLabel text="БИК">
                    <Form.Input
                      {...register('bik')}
                      placeholder="БИК"
                      hint={errors?.bik?.message}
                      withError={!!errors?.bik}
                    />
                  </Form.FloatingLabel>
                </Col>
                <Col>
                  <Form.FloatingLabel text="Корр. счёт">
                    <Form.Input
                      {...register('correspondentAccount')}
                      placeholder="Корр. счёт"
                      hint={errors?.correspondentAccount?.message}
                      withError={!!errors?.correspondentAccount}
                    />
                  </Form.FloatingLabel>
                </Col>
              </Row>
              <Form.FloatingLabel text="Наименование банка">
                <Form.Input
                  {...register('bankName')}
                  placeholder="Наименование банка"
                  hint={errors?.bankName?.message}
                  withError={!!errors?.bankName}
                />
              </Form.FloatingLabel>
            </Box>
          </>
        );
      }}
    </ConnectForm>
  );
};
