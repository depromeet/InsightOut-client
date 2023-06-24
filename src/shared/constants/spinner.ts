import { colors } from '@/styles/theme/foundations/colors';

export const SPINNER_SIZE = {
  S: { width: '16px', height: '16px' },
  M: { width: '20px', height: '20px' },
  L: { width: '24px', height: '24px' },
} as const;

export const SPINNER_STYLE = {
  primary500: colors.primary[500],
  secondary500: colors.secondary[500],
} as const;
