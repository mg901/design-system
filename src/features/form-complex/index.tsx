import { FormProvider, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Form, FormProps, Button } from '@/design-system';
import * as yup from 'yup';

import { defaultValues } from './constants';
import { ToWhom } from './ui/to-whom';
import { Bank } from './ui/bank';
import { HowMuch } from './ui/how-much';
import { PaymentToBudget } from './ui/payment-to-budget';
import { ThirdPartyPayment } from './ui/third-party-payment';
import { Additionally } from './ui/additionally';
import { FormValues } from './ui/types';

const schema = yup.object().shape({
  name: yup.string().required('Обязательное поле'),
  inn: yup.string().required('Обязательное поле'),
  kpp: yup.string().required('Обязательное поле'),
  accountNumber: yup.string().required('Обязательное поле'),
  bik: yup.string().required('Обязательное поле'),
  correspondentAccount: yup.string().required('Обязательное поле'),
  bankName: yup.string().required('Обязательное поле'),
  sourcePayment: yup.string().required('Обязательное поле'),
  sum: yup.string().required('Обязательное поле'),
  appointment: yup.string().required('Обязательное поле'),
  payerStatus: yup.string().required('Обязательное поле'),
  butgetClassificationCode: yup.string().required('Обязательное поле'),
  taxablePeriod: yup.string().required('Обязательное поле'),
  taxablePeriodYear: yup.string().required('Обязательное поле'),
  octmoCode: yup.string().required('Обязательное поле'),
  taxPaymentBasis: yup.string().required('Обязательное поле'),
  documentNumber: yup.string().required('Обязательное поле'),
  documentDate: yup.string().required('Обязательное поле'),
  taxpayerInn: yup.string().required('Обязательное поле'),
  taxpayerKpp: yup.string().required('Обязательное поле'),
  taxpayerName: yup.string().required('Обязательное поле'),
  taxpayerAddress: yup.string().required('Обязательное поле'),
  paymentOrder: yup.string(),
  uinCode: yup.string(),
  incomeCode: yup.string(),
  operationCode: yup.string(),
  payoutCode: yup.string(),
  retainded: yup.string(),
});

export const FormComplex = (props: FormProps) => {
  const methods = useForm<FormValues>({
    defaultValues,
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: FormValues) => {
    console.log('data', data);
  };

  return (
    <FormProvider {...methods}>
      <Form
        {...props}
        id="complex-form"
        onSubmit={methods.handleSubmit(onSubmit)}
      >
        <ToWhom />
        <Bank />
        <HowMuch />
        <PaymentToBudget />
        <ThirdPartyPayment />
        <Additionally />
        <Button form="complex-form" type="submit">
          Сохранить
        </Button>
      </Form>
    </FormProvider>
  );
};
