import { Rectangle } from './ui/rectangle';
import { Square } from './ui/square';

export const ArrangeElements = () => {
  return (
    <Rectangle position="relative">
      <Square position="absolute" top="0" start="0" />
      <Square position="absolute" bottom="0" start="0" />
      <Square position="absolute" top="50" start="50" />
      <Square position="absolute" bottom="50" end="50" />
      <Square position="absolute" top="0" end="0" />
      <Square position="absolute" bottom="0" end="0" />
    </Rectangle>
  );
};
