import { Box, Text, Form, Row, Col } from '@/design-system';
import { ConnectForm } from '@/shared/react-hook-form';
import { FormValues } from './types';

export const ThirdPartyPayment = () => {
  return (
    <ConnectForm<FormValues>>
      {({ register, formState: { errors } }) => {
        return (
          <>
            <Text as="h2">Платёж за третье лицо</Text>
            <Box as="fieldset">
              <Row>
                <Col>
                  <Form.FloatingLabel text="ИНН налогоплательщика">
                    <Form.Input
                      {...register('taxpayerInn')}
                      placeholder="ИНН налогоплательщика"
                      hint={errors?.taxpayerInn?.message}
                      withError={!!errors?.taxpayerInn}
                    />
                  </Form.FloatingLabel>
                </Col>
                <Col>
                  <Form.FloatingLabel text="КПП">
                    <Form.Input
                      {...register('taxpayerKpp')}
                      placeholder="КПП"
                      hint={errors?.taxpayerKpp?.message}
                      withError={!!errors?.taxpayerKpp}
                    />
                  </Form.FloatingLabel>
                </Col>
              </Row>
              <Form.FloatingLabel text="Наименование">
                <Form.Input
                  {...register('taxpayerName')}
                  placeholder="Наименование"
                  hint={errors?.taxpayerName?.message}
                  withError={!!errors?.taxpayerName}
                />
              </Form.FloatingLabel>
              <Form.FloatingLabel text="Адрес">
                <Form.Input
                  {...register('taxpayerAddress')}
                  placeholder="Адрес"
                  hint={errors?.taxpayerAddress?.message}
                  withError={!!errors?.taxpayerAddress}
                />
              </Form.FloatingLabel>
            </Box>
          </>
        );
      }}
    </ConnectForm>
  );
};
