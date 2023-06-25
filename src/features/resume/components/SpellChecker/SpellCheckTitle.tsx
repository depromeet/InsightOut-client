import IconCheckCircle from '@/components/Icon/IconCheckCircle';
import { SpellCheckResult } from '../../types/question';
import SpellErrorResult from './SpellErrorResult';

type SpellCheckTitleProps = {
  status: SpellCheckResult;
};

const SpellCheckTitle = ({ status }: SpellCheckTitleProps) => {
  if (status === 'error') return <SpellErrorResult />;

  return (
    <div className="px-[24px] py-[20px] text-main">
      {status === 'correct' ? (
        <span className="flex items-center b2">
          <IconCheckCircle className="mx-[6px]" />
          맞춤법 검사 오류가 <span className="b1">&nbsp;0개&nbsp;</span> 발견되었습니다.
        </span>
      ) : (
        <span className="b1">맞춤법 검사</span>
      )}
    </div>
  );
};

export default SpellCheckTitle;
