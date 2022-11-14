import { Box, Text, Form, Row, Col } from '@/design-system';
import { ConnectForm } from '@/shared/react-hook-form';
import { FormValues } from './types';

export const PaymentToBudget = () => {
  return (
    <ConnectForm<FormValues>>
      {({ register, formState: { errors } }) => {
        return (
          <>
            <Text as="h2">Платёж в бютжет</Text>
            <Box as="fieldset">
              <Row>
                <Col>
                  <Form.FloatingLabel text="Статус плательщика">
                    <Form.Input
                      {...register('payerStatus')}
                      placeholder="Статус плательщика"
                      hint={errors?.payerStatus?.message}
                      withError={!!errors?.payerStatus}
                    />
                  </Form.FloatingLabel>
                </Col>
                <Col>
                  <Form.FloatingLabel text="Код бютжетной организации">
                    <Form.Input
                      {...register('butgetClassificationCode')}
                      placeholder="Код бютжетной организации"
                      hint={errors?.butgetClassificationCode?.message}
                      withError={!!errors?.butgetClassificationCode}
                    />
                  </Form.FloatingLabel>
                </Col>
              </Row>

              <Row>
                <Col>
                  <Form.FloatingLabel text="Налоговый период">
                    <Form.Input
                      {...register('taxablePeriod')}
                      placeholder="Налоговый период"
                      hint={errors?.taxablePeriod?.message}
                      withError={!!errors?.taxablePeriod}
                    />
                  </Form.FloatingLabel>
                </Col>
                <Col>
                  <Form.FloatingLabel text="Год">
                    <Form.Input
                      {...register('taxablePeriodYear')}
                      placeholder="Год"
                      hint={errors?.taxablePeriodYear?.message}
                      withError={!!errors?.taxablePeriodYear}
                    />
                  </Form.FloatingLabel>
                </Col>
              </Row>

              <Row>
                <Col>
                  <Form.FloatingLabel text="Код ОКТМО">
                    <Form.Input
                      {...register('octmoCode')}
                      placeholder="Код ОКТМО"
                      hint={errors?.octmoCode?.message}
                      withError={!!errors?.octmoCode}
                    />
                  </Form.FloatingLabel>
                </Col>
                <Col>
                  <Form.FloatingLabel text="Основание налогового платежа">
                    <Form.Input
                      {...register('taxPaymentBasis')}
                      placeholder="Основание налогового платежа"
                      hint={errors?.taxPaymentBasis?.message}
                      withError={!!errors?.taxPaymentBasis}
                    />
                  </Form.FloatingLabel>
                </Col>
              </Row>

              <Row>
                <Col>
                  <Form.FloatingLabel text="Номер документа">
                    <Form.Input
                      {...register('documentNumber')}
                      placeholder="Номер документа"
                      hint={errors?.documentNumber?.message}
                      withError={!!errors?.documentNumber}
                    />
                  </Form.FloatingLabel>
                </Col>
                <Col>
                  <Form.FloatingLabel text="Дата документа">
                    <Form.Input
                      {...register('documentDate')}
                      placeholder="Дата документа"
                      hint={errors?.documentDate?.message}
                      withError={!!errors?.documentDate}
                    />
                  </Form.FloatingLabel>
                </Col>
              </Row>
            </Box>
          </>
        );
      }}
    </ConnectForm>
  );
};
