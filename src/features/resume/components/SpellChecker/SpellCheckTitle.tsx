import { SpellCheckResultStatus } from '../../types/question';
import SpellErrorResult from './SpellErrorResult';

type SpellCheckTitleProps = {
  status: SpellCheckResultStatus;
};

const SpellCheckTitle = ({ status }: SpellCheckTitleProps) => {
  if (status === 'error') return <SpellErrorResult />;

  return (
    <div className="px-[24px] py-[20px] text-main">
      {status === 'success' ? (
        <span className="b2">
          맞춤법 검사 오류가 <span className="b1">0개</span> 발견되었습니다.
        </span>
      ) : (
        <span className="b1">맞춤법 검사</span>
      )}
    </div>
  );
};

export default SpellCheckTitle;
