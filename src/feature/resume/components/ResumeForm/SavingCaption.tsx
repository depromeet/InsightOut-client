import type { MutationStatus } from '@tanstack/react-query';
import { ButtonSpinner } from '@chakra-ui/react';

import { colors } from '@/styles/theme/foundations/colors';
import { SAVING_STATUS } from '../../constants/savingStatus';

type SavingCaptionProps = { updatedAt: string; currentSavingStatus: MutationStatus };

const SavingCaption = ({ updatedAt, currentSavingStatus }: SavingCaptionProps) => {
  return (
    <div className="flex items-center text-gray-500 b4">
      <span>{updatedAt}</span>
      <span className="mx-2">|</span>
      {<span>{SAVING_STATUS[currentSavingStatus]}</span>}
      {currentSavingStatus === 'loading' && (
        <ButtonSpinner position={'initial'} marginLeft={'4px'} color={colors.secondary[500]} />
      )}
    </div>
  );
};

export default SavingCaption;
