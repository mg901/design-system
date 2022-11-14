import { BrowserRouter } from 'react-router-dom';
import { Routes } from '@/app/routes';

export const App = () => {
  return (
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  );
};
