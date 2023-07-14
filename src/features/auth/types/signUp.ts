/* eslint-disable unused-imports/no-unused-vars */

import { Field } from '@/shared/constants/user';

export type Category = { title: string; field: Field };

export type AuthModalSize = 'md' | 'xl' | '5xl';

export type SignUpSteps = 'signUp' | 'welcome' | 'categories' | 'startnow';

export type SignUpConfig = {
  [key in SignUpSteps]: { modalSize: AuthModalSize; contents: JSX.Element };
};
