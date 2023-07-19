'use client';

import { Route } from 'next';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';

import Button from '@/components/Button/Button';
import { ROUTES } from '@/shared/constants/routes';

import lumosCry from '/public/images/lumos-cry.png';

const NotFound = () => {
  const [pathname] = usePathname().split('/').slice(-1) as Route[];

  type PageInfo = {
    keyword: string;
    subMessage: string;
    buttonText: string;
    redirectUrl: Route;
  };

  type PageTextcontent = {
    // eslint-disable-next-line unused-imports/no-unused-vars
    [key: string]: PageInfo;
  };

  const PAGE_TEXTCONTENT: PageTextcontent = {
    experiences: {
      keyword: '경험카드',
      subMessage: '경험분해부터 시작해볼까요?',
      buttonText: '경험분해',
      redirectUrl: ROUTES.EXPERIENCE,
    },
    resumes: {
      keyword: '자기소개서',
      subMessage: '자기소개서 작성하러 가볼까요?',
      buttonText: '자기소개서',
      redirectUrl: ROUTES.RESUMES_UNDEFINED as Route,
    },
    'ai-recommends': {
      keyword: '추천받은 자기소개서',
      subMessage:
        '경험분해를 하면 AI의 직무 역량 키워드 추천과 자기소개서 제안을 받을 수 있어요. \n경험분해를 시작해볼까요?',
      buttonText: '경험분해',
      redirectUrl: ROUTES.EXPERIENCE,
    },
  };

  const { push } = useRouter();

  return (
    <div>
      <div className="">
        <div className="flex justify-center w-full mt-[119px]">
          <Image src={lumosCry} alt="경험 카드가 없습니다." width={225} height={174} />
        </div>
        <div className="flex flex-col text-center mt-[17px]">
          <h3 className="text-light h3 mb-[8px]">
            앗! 아직 작성한 {PAGE_TEXTCONTENT[pathname as string].keyword} 없어요
          </h3>
          <p className="whitespace-pre-line text-light subhead3">{PAGE_TEXTCONTENT[pathname as string].subMessage}</p>
          <div className="flex justify-center w-full mt-[45px]">
            <Button variant="gray900" size="XL" onClick={() => push(PAGE_TEXTCONTENT[pathname as Route].redirectUrl)}>
              {`${PAGE_TEXTCONTENT[pathname as string].buttonText} 시작하기`}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
