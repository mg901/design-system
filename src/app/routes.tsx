import { useRoutes } from 'react-router-dom';
import { CONFIG } from './config';
import { RootTemplate } from '@/app/ui/root-template';

// PAGES
import TypographyPage from '@/pages/typography';
import ButtonsPage from '@/pages/buttons';
import GridPage from '@/pages/grid';
import PositionPage from '@/pages/position';

// form
import FormSimplePage from '@/pages/form/simple';
import FormWithNestedFieldsPage from '@/pages/form/with-nested-fields';
import BrokenForm from '@/pages/broken-form';

import OverlayPage from '@/pages/overlay';
import { TransitAccountOrder } from '@/processes/transit-account-order';

export const Routes = () =>
  useRoutes([
    {
      path: CONFIG.HOME.PATH,
      element: <RootTemplate />,
      children: [
        {
          index: true,
          element: <TypographyPage />,
        },
        {
          path: CONFIG.BUTTONS.PATH,
          element: <ButtonsPage />,
        },
        {
          path: CONFIG.GRID.PATH,
          element: <GridPage />,
        },
        {
          path: CONFIG.POSITION.PATH,
          element: <PositionPage />,
        },
        {
          path: CONFIG.SIMPLE_FORM.PATH,
          element: <FormSimplePage />,
        },
        {
          path: CONFIG.FOMRM_WITH_NESTED_FIELDS.PATH,
          element: <FormWithNestedFieldsPage />,
        },
        {
          path: CONFIG.BROKEN_FORM.PATH,
          element: <BrokenForm />,
        },
        {
          path: CONFIG.OVERLAY.PATH,
          element: <OverlayPage />,
        },
        {
          path: CONFIG.TRANSIT_ACCOUNT_ORDER.PATH,
          element: <TransitAccountOrder />,
        },
      ],
    },
  ]);
