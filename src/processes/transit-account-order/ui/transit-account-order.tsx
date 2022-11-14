import { useLocation, useNavigate } from 'react-router-dom';
import { Stepper, Step } from '@/design-system';
import { PaymentOrderStep } from './payment-order-step';
import { InformationForCurrencyControlStep } from './information-for-currency-control-step';
import { ViewStep } from './view-step';
import { ProcessTemplate } from '@/processes/ui/process-template';

const TABS = [
  {
    component: PaymentOrderStep,
    title: 'Платёжное поручение',
  },
  {
    component: InformationForCurrencyControlStep,
    title: 'Информация для валютного контроля',
  },
  {
    component: ViewStep,
    title: 'Просмотр',
  },
];

type Location = {
  state: {
    activeStep: number;
  };
};

export const TransitAccountOrder = () => {
  const location = useLocation() as Location;
  const navigate = useNavigate();
  const currentStep = location?.state?.activeStep ?? 0;
  const tab = TABS[currentStep];

  const handleClose = () => {
    navigate('/');
  };

  return (
    <ProcessTemplate>
      <ProcessTemplate.Header
        title="Распоряжение по транзитному счёту"
        onClose={handleClose}
      />
      <Stepper activeStep={currentStep}>
        {TABS.map(({ title }) => {
          return (
            <Step key={title}>
              <Step.Label>{title}</Step.Label>
            </Step>
          );
        })}
      </Stepper>
      {<tab.component />}
    </ProcessTemplate>
  );
};
