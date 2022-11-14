import { Box, Text, Form, Row, Col } from '@/design-system';
import { ConnectForm } from '@/shared/react-hook-form';
import { FormValues } from './types';

export const Additionally = () => {
  return (
    <ConnectForm<FormValues>>
      {({ register }) => {
        return (
          <>
            <Text as="h2">Дополнительно</Text>
            <Box as="fieldset">
              <Form.FloatingLabel text="Очерёдность платежа">
                <Form.Input
                  {...register('paymentOrder')}
                  placeholder="Очерёдность платежа"
                />
              </Form.FloatingLabel>
              <Row>
                <Col>
                  <Form.FloatingLabel text="Код (УИН/УИП)">
                    <Form.Input
                      {...register('uinCode')}
                      placeholder="Код (УИН/УИП)"
                    />
                  </Form.FloatingLabel>
                </Col>
                <Col>
                  <Form.FloatingLabel text="Код вида доходов">
                    <Form.Input
                      {...register('incomeCode')}
                      placeholder="Код вида доходов"
                    />
                  </Form.FloatingLabel>
                </Col>
              </Row>

              <Row>
                <Col>
                  <Form.FloatingLabel text="Код вида операции" as={Col}>
                    <Form.Input
                      {...register('operationCode')}
                      placeholder="Код вида операции"
                    />
                  </Form.FloatingLabel>
                </Col>
                <Col>
                  <Form.FloatingLabel text="Код выплат " as={Col}>
                    <Form.Input
                      {...register('payoutCode')}
                      placeholder="Код выплат "
                    />
                  </Form.FloatingLabel>
                </Col>
              </Row>

              <Form.FloatingLabel text="Удержан по исполнительному документу">
                <Form.Input
                  {...register('retainded')}
                  placeholder="Удержан по исполнительному документу"
                />
              </Form.FloatingLabel>
            </Box>
          </>
        );
      }}
    </ConnectForm>
  );
};
