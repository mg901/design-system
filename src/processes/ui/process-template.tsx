/* eslint @typescript-eslint/no-use-before-define: 0 */
import { Overlay } from '@/design-system';
import { ProcessHeader } from './process-header';
import { ProcessContent } from './process-content';
import { ProcessFooter } from './process-footer';

export const ProcessTemplate = Object.assign(ProcessRoot, {
  Header: ProcessHeader,
  Content: ProcessContent,
  Footer: ProcessFooter,
});

type Props = {
  children: React.ReactNode;
};

function ProcessRoot({ children }: Props) {
  return <Overlay opened>{children}</Overlay>;
}
