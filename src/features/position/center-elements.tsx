import { Rectangle } from './ui/rectangle';
import { Square } from './ui/square';

export const CenterElements = () => {
  return (
    <>
      <br />
      <br />
      <br />
      <Rectangle position="relative">
        <Square position="absolute" top="0" start="0" translate="middle" />
        <Square position="absolute" top="0" start="50" translate="middle" />
        <Square position="absolute" top="0" start="100" translate="middle" />
        <Square position="absolute" top="50" start="0" translate="middle" />
        <Square position="absolute" top="50" start="50" translate="middle" />
        <Square position="absolute" top="50" start="100" translate="middle" />
        <Square position="absolute" top="100" start="0" translate="middle" />
        <Square position="absolute" top="100" start="50" translate="middle" />
        <Square position="absolute" top="100" start="100" translate="middle" />
      </Rectangle>
      <br />
      <br />
      <br />
      <br />
      <Rectangle position="relative">
        <Square position="absolute" top="0" start="0" />
        <Square position="absolute" top="0" start="50" />
        <Square position="absolute" top="0" end="0" />
        <Square position="absolute" top="50" start="0" translate="y-middle" />
        <Square position="absolute" top="50" start="50" translate="y-middle" />
        <Square position="absolute" top="50" end="0" translate="y-middle" />
        <Square position="absolute" bottom="0" start="0" />
        <Square position="absolute" bottom="0" start="50" />
        <Square position="absolute" bottom="0" end="0" />
      </Rectangle>
    </>
  );
};
