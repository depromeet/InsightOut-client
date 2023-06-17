import ActionList from '@/components/ActionList/ActionList';
import IconMoreVertical from '@/components/Icon/IconMoreVertical';
import formatUpdatedAt from '@/shared/utils/formatUpdateAt';

type Props = {
  updatedAt: string;
  title: string;
  answer: string;
};

const ResumeCard = ({ updatedAt, title, answer }: Props) => {
  const MAX_LENGTH = 2000;
  return (
    <div className="border rounded-[24px] hover:shadow-S4 p-[24px]">
      <header className="relative mb-[16px]">
        {/* 액션버튼 */}
        <b className="b4 mb-[5px]">{formatUpdatedAt(updatedAt)}</b>
        {/* 자소서 문항 질문을 입력하지 않은 경우 -> ‘문항 질문을 적어보세요'로 제목이 보임 */}
        <h6 className="h6">{title}</h6>
        <ActionList>
          <ActionList.Button className="absolute top-0 right-0">
            <IconMoreVertical />
          </ActionList.Button>
          <ActionList.ItemWrapper>
            <ActionList.Item>수정하기</ActionList.Item>
            <ActionList.Item onClick={() => console.log('삭제 완')}>삭제하기</ActionList.Item>
          </ActionList.ItemWrapper>
        </ActionList>
      </header>
      <div>
        <textarea className="w-full bg-transparent resize-none b2">{answer}</textarea>
      </div>
      <footer className="flex flex-row-reverse mt-[8px] ">
        <b className="b3 text-light">
          <span className="text-secondary-500">{answer.length}자</span>/{MAX_LENGTH}자
        </b>
      </footer>
    </div>
  );
};

export default ResumeCard;
