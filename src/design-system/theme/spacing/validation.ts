import invariant from 'tiny-invariant';
import mem from 'mem';
import { CONFIG } from './config';
import { Margin, Padding } from './types';

type Spacing = Margin | Padding;

export const isNotEmpty = (spacing?: Spacing) => spacing !== undefined;

const checkIsValidMaxSpacing = mem((spacing: number) => {
  invariant(
    spacing <= CONFIG.MAX_SPACING,
    `[spacing]: ${spacing} is invalid. Spacing can't be more than ${CONFIG.MAX_SPACING}`,
  );
});

const checkIsValidMinSpacing = mem((spacing: number) => {
  invariant(
    spacing >= CONFIG.MIN_SPACING,
    `[spacing]: ${spacing} is invalid. Spacing can't be less than ${CONFIG.MIN_SPACING}`,
  );
});

const checkIsValidSpacing = mem((spacing: number) => {
  invariant(
    spacing % CONFIG.GUTTER === 0,
    `[spacing]: ${spacing} is inavlid. Enter a number multiple of ${CONFIG.GUTTER}`,
  );
});

export const validateSpacing = (spacing?: Spacing) => {
  if (!spacing || typeof spacing !== 'number') return;

  checkIsValidMaxSpacing(spacing);
  checkIsValidMinSpacing(spacing);
  checkIsValidSpacing(spacing);
};
