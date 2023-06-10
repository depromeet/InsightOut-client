/* eslint-disable unused-imports/no-unused-vars */

/**
 * @name MergeComponentProps
 * @description ComponentPropsWithRef와 커스텀 Props 타입을 병합합니다.
 */
type MergeComponentProps<T extends React.ElementType, P extends object = {}> = Omit<
  React.ComponentPropsWithRef<T>,
  keyof P
> &
  P;

// color scale
type colorScale = 50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900;

// Button

type ButtonVariant = 'gray900' | 'primary' | 'secondary' | 'gray200' | 'outlined';
type ButtonSize = 'S' | 'M' | 'L' | 'XL';

// Chip

type ChipVariant = 'primary' | 'secondary';
type ChipSize = 'sm' | 'md';

// Badge

type BadgeStyle =
  | 'tertiary'
  | 'outlined-primary'
  | 'outlined-secondary'
  | 'filled-primary'
  | 'filled-secondary'
  | 'dark';
type BadgeSize = 'sm' | 'md' | 'lg';

// Tooltip

type TooltipType = 'strong' | 'light';
type TooltipPosition =
  | 'center-top'
  | 'center-bottom'
  | 'right-top'
  | 'right-bottom'
  | 'left-top'
  | 'left-bottom'
  | 'side-left-center'
  | 'side-right-center';
type TooltipPlacement = {
  top: string;
  left: string;
  transform: string;
};

// Tab

type TabSize = 'xs' | 'sm' | 'md' | 'lg';
type TabVariant = 'default' | 'pressed';

// Tag

type TagVariant =
  | 'primary-50'
  | 'primary-500'
  | 'primary-outline'
  | 'secondary'
  | 'secondary-outline'
  | 'tertiary'
  | 'gray-800';
type TagSize = 's1' | 's2' | 's3';
