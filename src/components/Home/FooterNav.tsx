'use client';

import { Route } from 'next';
import { useRouter } from 'next/navigation';

import { useAuthActions, useIsSignedIn } from '@/features/auth/store';
import { ROUTES } from '@/shared/constants/routes';

const FooterNav = () => {
  const isSignedIn = useIsSignedIn();
  const { setIsOpenSignUpModal } = useAuthActions();
  const router = useRouter();

  const checkIsSignedIn = () => {
    if (isSignedIn) return true;
    setIsOpenSignUpModal(true);
    router.push('/?steps=signUp');
    return false;
  };

  const handleRouter = (route: Route) => {
    if (!checkIsSignedIn()) return;
    router.push(route);
  };

  return (
    <nav className="max-w-[1200px] w-full pt-[22px] pb-[9.5px] mb-[23.5px] border-solid border-b-[1px] border-b-white">
      <ul className="flex items-center justify-center text-white b4">
        <li
          className="flex justify-center items-center w-[92px] h-[48px] text-center cursor-pointer"
          onClick={() => handleRouter(ROUTES.HOME as Route)}>
          홈
        </li>
        <li
          className="flex justify-center items-center w-[108px] h-[48px] text-center cursor-pointer"
          onClick={() => handleRouter(ROUTES.EXPERIENCE as Route)}>
          경험 분해
        </li>
        <li
          className="flex justify-center items-center w-[108px] h-[48px] text-center cursor-pointer"
          onClick={() => handleRouter(ROUTES.RESUMES as Route)}>
          자기소개서 작성
        </li>
        <li
          className="flex justify-center items-center w-[92px] h-[48px] text-center cursor-pointer"
          onClick={() => handleRouter('/collection/experiences' as Route)}>
          모아보기
        </li>
      </ul>
    </nav>
  );
};

export default FooterNav;
