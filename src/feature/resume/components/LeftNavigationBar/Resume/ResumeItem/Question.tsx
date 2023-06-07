import Link from 'next/link';

import { tw } from '@/services/utils/tailwindMerge';
import { ROUTES } from '@/shared/constants/routes';
import { QuestionData } from '@/services/@types/data/question';

import ActionList from '@/components/ActionList/ActionList';
import IconMoreVertical from '@/components/Icon/IconMoreVertical';
import IconDocument from '@/components/Icon/IconDocument';

type ResumeQuestionProps = QuestionData & {
  active?: boolean;
};

const ResumeQuestion = ({ id, title, active }: ResumeQuestionProps) => {
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
        <span className="max-w-[217px] text-ellipsis overflow-hidden whitespace-nowrap">{title}</span>
      </Link>

      <ActionList>
        <ActionList.Button>
          <IconMoreVertical />
        </ActionList.Button>
        <ActionList.ItemWrapper>
          <ActionList.Item onClick={handleDeleteButtonClick}>삭제하기</ActionList.Item>
        </ActionList.ItemWrapper>
      </ActionList>
    </div>
  );
};

export default ResumeQuestion;
