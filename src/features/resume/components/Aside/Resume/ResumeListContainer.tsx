import { PropsWithChildren } from 'react';

import { Accordion } from '@chakra-ui/react';

import { boxShadow } from '@/styles/theme/foundations/boxShadow';

type ResumeListContainerProps = PropsWithChildren;

const ResumeListContainer = ({ children }: ResumeListContainerProps) => {
  return (
    <Accordion
      allowMultiple
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
