import { FormComplex } from '@/features/form-complex';
import { PageTemplate } from '../ui/page-template';

const FormWithNestedFieldsPage = () => {
  return (
    <PageTemplate title="Форма с вложенными полями">
      <FormComplex />
    </PageTemplate>
  );
};

export default FormWithNestedFieldsPage;
