import { useState } from 'react';

import { AccordionButton, AccordionIcon, useDisclosure } from '@chakra-ui/react';

import ActionList from '@/components/ActionList/ActionList';
import IconFolder from '@/components/Icon/IconFolder';
import IconMoreVertical from '@/components/Icon/IconMoreVertical';
import { useDeleteResume, useUpdateResumeTitle } from '@/hooks/reactQuery/resume/mutation';
import { MAX_LENGTH } from '@/shared/constants/maxLength';

import DeleteModal from '../../DeleteModal';

type TitleProps = { resumeId: number; title: string; selected?: boolean };

/**
 * @description 자기소개서 제목을 보여주고 수정할 수 있고 자기소개서 리스트 항목을 트리거하는 컴포넌트입니다.
 *
 * - 이 컴포넌트는 자기소개서 제목을 보여줍니다.
 * - 이 컴포넌트는 자기소개서 제목을 수정할 수 있습니다.
 * - 이 컴포넌트는 자기소개서를 삭제할 수 있습니다.
 * - 이 컴포넌트를 클릭하면 자기소개서 항목 리스트를 볼 수 있습니다.
 *
 * - 수정을 하면 input 요소로 변경됩니다.
 * - input 요소에서 blur 이벤트가 발생하면 자기소개서 제목이 수정됩니다.
 */
const Title = ({ resumeId, title = '자기소개서 예시', selected }: TitleProps) => {
  const [isEditMode, setIsEditMode] = useState(false);

  const { isOpen, onOpen, onClose } = useDisclosure();

  const { mutate: updateResumeTitle } = useUpdateResumeTitle(resumeId);
  const { mutate: deleteResume } = useDeleteResume(resumeId);

  const handleEditButtonClick = () => {
    setIsEditMode(true);
  };

  const handleEditInputBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    setIsEditMode(false);
    updateResumeTitle(e.target.value);
  };

  const handleEditInputEnterKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      setIsEditMode(false);
      updateResumeTitle(e.currentTarget.value);
    }
  };

  const handleDeleteButtonClick = () => {
    deleteResume({ resumeId });
  };

  /**
   * @description input 클릭 시, Accordion 버튼이 클릭돼서 open 되는 것을 방지하고자 이벤트 전파를 막습니다.
   */
  const handleEditInputClick = (e: React.MouseEvent<HTMLInputElement>) => {
    e.stopPropagation();
  };

  return (
    <div
      className={`flex items-center pr-4 rounded-t-[10px] border-b-2 border-b-[#F5F6F7] font-semibold cursor-pointer hover:bg-gray-100 ${
        selected ? 'bg-primary-50 text-primary-500 stroke-primary-500' : 'stroke-gray-600 text-sub'
      }`}>
      <AccordionButton as="div" paddingY="12px" _hover={{ backgroundColor: 'none' }}>
        <AccordionIcon marginRight="12px" />
        <IconFolder className="mr-[6px]" />
        {isEditMode ? (
          <input
            autoFocus
            defaultValue={title}
            maxLength={MAX_LENGTH.RESUME_TITLE}
            onBlur={handleEditInputBlur}
            onClick={handleEditInputClick}
            onKeyUp={handleEditInputEnterKeyPress}
            className="px-1 border-[1px] border-gray-400 text-sub max-w-[170px]"
          />
        ) : (
          <span className="max-w-[170px] overflow-hidden font-semibold sub text-ellipsis whitespace-nowrap">
            {title}
          </span>
        )}
      </AccordionButton>

      <ActionList>
        <ActionList.Button>
          <IconMoreVertical />
        </ActionList.Button>
        <ActionList.ItemWrapper>
          <ActionList.Item onClick={handleEditButtonClick}>수정하기</ActionList.Item>
          <ActionList.Item onClick={onOpen}>삭제하기</ActionList.Item>
        </ActionList.ItemWrapper>
      </ActionList>
      <DeleteModal
        isOpen={isOpen}
        onClose={onClose}
        handleLeftClick={onClose}
        handleRightClick={handleDeleteButtonClick}
      />
    </div>
  );
};

export default Title;
