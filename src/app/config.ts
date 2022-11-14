const typography = 'typography';
const buttons = 'buttons';
const grid = 'layout';
const simpleForm = 'simple-form';
const formWithNestedFields = 'form-with-nested-fields';
const position = 'position';
const brokenForm = 'broken-form';
const overlay = 'overlay';
const transitAccountOrder = 'transit-account-order';

export const CONFIG = {
  HOME: {
    PATH: '/',
    LINK: '/',
  },
  TYPOGRAPHY: {
    PATH: typography,
    LINK: `/${typography}`,
  },
  BUTTONS: {
    PATH: buttons,
    LINK: `/${buttons}`,
  },
  GRID: {
    PATH: grid,
    LINK: `/${grid}`,
  },
  SIMPLE_FORM: {
    PATH: simpleForm,
    LINK: `/${simpleForm}`,
  },
  FOMRM_WITH_NESTED_FIELDS: {
    PATH: formWithNestedFields,
    LINK: `/${formWithNestedFields}`,
  },
  POSITION: {
    PATH: position,
    LINK: `/${position}`,
  },
  BROKEN_FORM: {
    PATH: brokenForm,
    LINK: `/${brokenForm}`,
  },
  OVERLAY: {
    PATH: overlay,
    LINK: `/${overlay}`,
  },
  TRANSIT_ACCOUNT_ORDER: {
    PATH: transitAccountOrder,
    LINK: `/${transitAccountOrder}`,
  },
} as const;
