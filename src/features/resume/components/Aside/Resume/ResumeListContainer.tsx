import { PropsWithChildren } from 'react';

import { Accordion } from '@chakra-ui/react';

import { boxShadow } from '@/styles/theme/foundations/boxShadow';

type ResumeListContainerProps = {
  expandedResumeCount?: number;
} & PropsWithChildren;

const ResumeListContainer = ({ expandedResumeCount, children }: ResumeListContainerProps) => {
  /** @description 펼쳐진 상태의 아코디언의 인덱스
   * - 기본적으로 모든 자기소개서 아코디언은 펼쳐져있습니다.
   */
  const expandedResumeIndexes = Array.from({ length: expandedResumeCount ?? 0 }).map((_, index) => index);

  return (
    <Accordion
      allowMultiple
      index={expandedResumeIndexes}
      display="flex"
      flexDirection="column"
      gap="8px"
      boxShadow={boxShadow.toast}
      borderColor="#F5F6F7"
      borderRadius="10px">
      {children}
    </Accordion>
  );
};

export default ResumeListContainer;
