/* eslint-disable unused-imports/no-unused-vars */

// Merge Component Props

type MergeComponentProps<T extends React.ElementType, P extends object = {}> = Omit<
  React.ComponentPropsWithRef<T>,
  keyof P
> &
  P;

// Button

type ButtonVariant = 'primary' | 'secondary' | 'tertiary' | 'secondary-green' | 'outlined';
type ButtonSize = 'sm' | 'md' | 'lg' | 'xl';

// Chip

type ChipVariant = 'primary' | 'secondary';
type ChipSize = 'sm' | 'md';
