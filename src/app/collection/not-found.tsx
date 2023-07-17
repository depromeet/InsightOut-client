'use client';

import Image from 'next/image';
import lumosCry from '../../../public/images/lumos-cry.png';
import { usePathname } from 'next/navigation';
import Button from '@/components/Button/Button';

const NotFound = () => {
  //TODO: type 다듬기
  const [pathname] = usePathname().split('/').slice(-1) as ('experiences' | 'resumes' | 'ai-recommends')[];
  const PAGE_TEXTCONTENT = {
    experiences: {
      keyword: '경험카드',
      subMessage: '경험분해부터 시작해볼까요?',
      buttonText: '경험분해',
    },
    resumes: {
      keyword: '자기소개서',
      subMessage: '자기소개서 작성하러 가볼까요?',
      buttonText: '자기소개서',
    },
    'ai-recommends': {
      keyword: '추천받은 자기소개서',
      subMessage:
        '경험분해를 하면 AI의 직무 역량 키워드 추천과 자기소개서 제안을 받을 수 있어요. \n경험분해를 시작해볼까요?',
      buttonText: '경험분해',
    },
  };

  return (
    <div>
      <div className="">
        <div className="flex justify-center w-full mt-[119px]">
          <Image src={lumosCry} alt="경험 카드가 없습니다." width={225} height={174} />
        </div>
        <div className="flex flex-col text-center mt-[17px]">
          <h3 className="text-light h3 mb-[8px]">앗! 아직 작성한 {PAGE_TEXTCONTENT[pathname].keyword} 없어요</h3>
          <p className="whitespace-pre-line text-light subhead3">{PAGE_TEXTCONTENT[pathname].subMessage}</p>
          <div className="flex justify-center w-full mt-[45px]">
            <Button variant="gray900" size="XL" onClick={() => console.log('페이지 이동')}>
              {`${PAGE_TEXTCONTENT[pathname].buttonText} 시작하기`}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
