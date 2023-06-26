import { useDisclosure } from '@chakra-ui/react';
import Link from 'next/link';

import ActionList from '@/components/ActionList/ActionList';
import IconDocument from '@/components/Icon/IconDocument';
import IconMoreVertical from '@/components/Icon/IconMoreVertical';
import { ROUTES } from '@/shared/constants/routes';
import { tw } from '@/shared/utils/tailwindMerge';

import { QuestionData } from '../../../../types/question';
import DeleteModal from '../../DeleteModal';

type ResumeQuestionProps = QuestionData & {
  active?: boolean;
};

const ResumeQuestion = ({ id, title, active }: ResumeQuestionProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleDeleteButtonClick = () => {
    /** ConfirmModal */
    /** isConfirmed: Delete API */
  };

  return (
    <div
      className={tw(
        `flex items-center justify-between py-2 px-4 text-sub hover:bg-gray-100 ${
          active ? 'bg-primary-50 text-primary-500 stroke-primary-500 hover:bg-primary-50' : 'stroke-gray-600'
        }`
      )}>
      <Link href={`${ROUTES.RESUMES}/${id}`} className={`flex w-full b3`}>
        <IconDocument className="mr-[6px]" />
        <span className="max-w-[217px] text-ellipsis overflow-hidden whitespace-nowrap">
          {title ?? '문항 질문을 적어보세요.'}
        </span>
      </Link>

      <ActionList>
        <ActionList.Button>
          <IconMoreVertical />
        </ActionList.Button>
        <ActionList.ItemWrapper>
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

export default ResumeQuestion;
