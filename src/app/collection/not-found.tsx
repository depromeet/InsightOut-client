'use client';

import { Route } from 'next';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';

import Button from '@/components/Button/Button';
import { PAGE_TEXTCONTENT } from '@/features/collection/constants';

import LumosNocard from '/public/images/lumos-nocard.png';

const NotFound = () => {
  const [pathname] = usePathname().split('/').slice(-1) as Route[];

  const { push } = useRouter();

  return (
    <div>
      <div className="">
        <div className="flex justify-center w-full mt-[119px]">
          <Image src={LumosNocard} alt="경험 카드가 없습니다." width={225} height={174} />
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
