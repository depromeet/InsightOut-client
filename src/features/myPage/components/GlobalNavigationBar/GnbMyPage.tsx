'use client';

import { useRef, useState } from 'react';

import { Flex } from '@chakra-ui/react';
import Image from 'next/image';

import SvgIconGnbMyPage from '@/components/Icon/IconGnbMyPage';
import useOnClickOutside from '@/hooks/useOnClickOutside';

import MyPageTab from './MyPageTab';

type GnbMyPageProps = {
  className?: string;
  profileImgUrl: string;
  nickname: string;
  email: string;
};

const GnbMyPage = ({ className, profileImgUrl, nickname, email }: GnbMyPageProps) => {
  const [isOpenTab, setIsOpenTab] = useState(false);

  const gnbRef = useRef<HTMLDivElement>(null);
  const tabRef = useOnClickOutside<HTMLDivElement>({
    ignoredRef: gnbRef,
    callback: () => setIsOpenTab(false),
  });

  return (
    <>
      <Flex
        ref={gnbRef}
        className={className}
        justifyContent={'space-between'}
        alignItems={'center'}
        gap={'10px'}
        onMouseEnter={() => setIsOpenTab(true)}
        onClick={() => setIsOpenTab(true)}>
        {profileImgUrl.length > 0 ? (
          <div className="flex justify-center items-center w-[32px] h-[32px] bg-white border-[1px] border-solid border-primary-50 rounded-[12px] drop-shadow-user-profile shrink-0">
            <Image src={profileImgUrl} width={20} height={20} alt="use-profile" />
          </div>
        ) : (
          <SvgIconGnbMyPage width={32} height={32} />
        )}
        마이 페이지
      </Flex>
      {isOpenTab && <MyPageTab ref={tabRef} profileImgUrl={profileImgUrl} nickname={nickname} email={email} />}
    </>
  );
};

export default GnbMyPage;
