import { ButtonSpinner } from '@chakra-ui/react';

import IconVerticalDivider from '@/components/Icon/IconVerticalDivider';
import { colors } from '@/styles/theme/foundations/colors';

import { SAVING_STATUS } from '../../constants/savingStatus';

type SavingCaptionProps = {
  updatedAt: string;
  currentSavingStatus: keyof typeof SAVING_STATUS;
  direction?: 'rtl' | 'ltr';
};

const SavingCaption = ({ updatedAt, currentSavingStatus, direction = 'rtl' }: SavingCaptionProps) => {
  return (
    <div className={`flex items-center ${direction === 'rtl' ? 'justify-start' : 'justify-end'} text-gray-500 b4`}>
      <span>{updatedAt}</span>
      {currentSavingStatus !== 'idle' && <IconVerticalDivider className="mx-[3px]" />}
      <span>{SAVING_STATUS[currentSavingStatus]}</span>
      {currentSavingStatus === 'loading' && (
        <ButtonSpinner position={'initial'} marginLeft={'4px'} color={colors.secondary[500]} />
      )}
    </div>
  );
};

export default SavingCaption;
