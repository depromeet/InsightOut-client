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

type ChipVariant = 'primary' | 'secondary' | 'primary-pressed' | 'secondary-pressed';
type ChipSize = 'S' | 'M';

// Badge

type BadgeVariant =
  | 'primary500'
  | 'primary50-outline'
  | 'secondary400'
  | 'secondary50-outline'
  | 'gray100-outline'
  | 'gray900';
type BadgeSize = 'S' | 'M' | 'L';

// Tooltip

type TooltipType = 'strong' | 'light' | 'primary';
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
  | 'primary500'
  | 'primary50'
  | 'primary50-outline'
  | 'secondary500'
  | 'secondary50-outline'
  | 'gray100'
  | 'gray800';
type TagSize = 'S' | 'M' | 'L';

// Spinner
type SpinnerStyle = 'primary500' | 'secondary500';
type SpinnerSize = 'S' | 'M' | 'L';
