import { createContext } from 'react';

interface FormContextType {
  controlId?: any;
}

export const FormContext = createContext<FormContextType>({});
