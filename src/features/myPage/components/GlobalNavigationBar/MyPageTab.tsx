import { forwardRef } from 'react';

import { Route } from 'next';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

import authApi from '@/apis/auth/auth';
import SvgIconGnbMyPage from '@/components/Icon/IconGnbMyPage';
import SvgIconLogIn from '@/components/Icon/IconLogIn';
import SvgIconSettingLine from '@/components/Icon/IconSettingLine';
import { useAuthActions } from '@/features/auth/store';
import { ROUTES } from '@/shared/constants/routes';

type MyPageTabProps = {
  profileImgUrl: string;
  nickname: string;
  email: string;
};

/**
 * GNB 마이페이지 hover 시 출력되는 Tab
 */
const MyPageTab = forwardRef<HTMLDivElement, MyPageTabProps>(({ profileImgUrl = '', nickname, email }, ref) => {
  const router = useRouter();
  const { setIsSignedIn } = useAuthActions();

  const handleClickSignOut = async () => {
    await authApi.signOut();
    setIsSignedIn(false);
  };

  return (
    <div ref={ref} className="absolute top-[55px] flex flex-col w-fit p-[16px] bg-white rounded-[16px] menulist">
      <div className="flex gap-[10px] pb-[12px] border-b border-b-gray-200">
        {profileImgUrl.length > 0 ? (
          <div className="flex justify-center items-center w-[40px] h-[40px] bg-white border-[1px] border-solid border-primary-50 rounded-[12px] drop-shadow-user-profile shrink-0">
            <Image src={profileImgUrl} width={20} height={20} alt="use-profile" />
          </div>
        ) : (
          <SvgIconGnbMyPage width={40} height={40} />
        )}
        <div className="flex flex-col">
          <p className="subhead4 text-main">{nickname}</p>
          <p className="b3 text-light">{email}</p>
        </div>
      </div>
      <div className="flex flex-col pt-[12px]">
        <button
          className="flex items-center w-[200px] h-[44px] py-[12px] px-[14px] rounded-[2px] bg-white text-sub gap-[4px] b1 hover:bg-gray-50"
          onClick={() => router.push(ROUTES.MY_PAGE as Route)}>
          <SvgIconSettingLine />
          계정정보
        </button>
        <button
          className="flex items-center w-[200px] h-[44px] py-[12px] px-[14px] rounded-[2px] bg-white text-sub gap-[4px] b1 hover:bg-gray-50"
          onClick={handleClickSignOut}>
          <SvgIconLogIn />
          로그아웃
        </button>
      </div>
    </div>
  );
});

MyPageTab.displayName = 'MyPageTab';

export default MyPageTab;
