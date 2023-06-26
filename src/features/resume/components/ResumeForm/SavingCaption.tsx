import { ButtonSpinner } from '@chakra-ui/react';

import { colors } from '@/styles/theme/foundations/colors';

import { SAVING_STATUS } from '../../constants/savingStatus';

type SavingCaptionProps = { updatedAt: string; currentSavingStatus: keyof typeof SAVING_STATUS };

const SavingCaption = ({ updatedAt, currentSavingStatus }: SavingCaptionProps) => {
  return (
    <div className="flex items-center text-gray-500 b4">
      <span>{updatedAt}</span>
      <span className="before:content-[''] before:mx-2 before:border-gray-500 before:border-[0.5px]">
        {SAVING_STATUS[currentSavingStatus]}
      </span>
      {currentSavingStatus === 'loading' && (
        <ButtonSpinner position={'initial'} marginLeft={'4px'} color={colors.secondary[500]} />
      )}
    </div>
  );
};

export default SavingCaption;
