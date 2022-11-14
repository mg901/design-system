import { useNavigate } from 'react-router-dom';
import { PageTemplate } from './ui/page-template';
import { Button } from '@/design-system';

const OverlayPage = () => {
  const navigate = useNavigate();

  const handleOpen = () => {
    navigate('/transit-account-order');
  };

  return (
    <PageTemplate title="Overlay">
      <Button onClick={handleOpen}>Распоряжение по транзитному счёту</Button>
    </PageTemplate>
  );
};

export default OverlayPage;
