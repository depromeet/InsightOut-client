import Link from 'next/link';

import { tw } from '@/services/utils/tailwindMerge';

import ActionList from '@/components/ActionList/ActionList';
import IconMore from '@/components/Icon/IconMoreVertical';
import IconDocument from '@/components/Icon/IconDocument';

/** FIXME: response 타입과 연관되게 수정 예정  */
type ResumeQuestionProps = {
  id: number;
  title: string;
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
          active ? 'bg-purple-50 text-purple-500 stroke-purple-500 hover:bg-purple-50' : 'stroke-gray-600'
        }`
      )}>
      <Link href={`/resume/${id}`} className={`flex w-full b3`}>
        <IconDocument className="mr-[6px]" />
        <span className="max-w-[217px] text-ellipsis overflow-hidden whitespace-nowrap">{title}</span>
      </Link>

      <ActionList>
        <ActionList.Button>
          <IconMore />
        </ActionList.Button>
        <ActionList.ItemWrapper>
          <ActionList.Item onClick={handleDeleteButtonClick}>삭제하기</ActionList.Item>
        </ActionList.ItemWrapper>
      </ActionList>
    </div>
  );
};

export default ResumeQuestion;
