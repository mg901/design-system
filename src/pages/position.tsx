import { PageTemplate } from './ui/page-template';
import { ArrangeElements, CenterElements } from '@/features/position';

const PositionPage = () => {
  return (
    <PageTemplate title="Позиционирование">
      <ArrangeElements />
      <CenterElements />
    </PageTemplate>
  );
};

export default PositionPage;
