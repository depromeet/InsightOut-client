import { ComponentPropsWithoutRef, Suspense } from 'react';

import { Flex } from '@chakra-ui/react';
import cn from 'classnames';
import { Route } from 'next';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';
import HomeLogo from 'public/images/home/img-home-logo.png';

import AuthModal from '@/features/auth/components/AuthModal/AuthModal';
import { useAuthActions } from '@/features/auth/store';
import GnbMyPage from '@/features/myPage/components/GlobalNavigationBar/GnbMyPage';
import { ROUTES, SIGN_UP_ROUTES } from '@/shared/constants/routes';
import { useUserEmail, useUserImageUrl, useUserNickname } from '@/shared/store/user';
import { tw } from '@/shared/utils/tailwindMerge';

import Button from '../Button/Button';
import IconGoogleLogo from '../Icon/IconGoogleLogo';
import Spinner from '../Spinner/Spinner';
import styles from './GlobalNavigationBar.module.scss';

type GlobalNavigationBarProps = ComponentPropsWithoutRef<'header'> & {
  /**
   * 로그인 되어있는지 여부
   */
  isSignedIn: boolean;
  /**
   * Auth 관련 요청이 진행 중인지 여부 (스피너 출력을 위해 필요)
   */
  isRequesting: boolean;
  isOpenSignUpModal: boolean;
  onCloseAuthModal: () => void;
  onAbortSignUp: () => void;
};

const GlobalNavigationBar = ({
  className,
  isSignedIn,
  isRequesting,
  isOpenSignUpModal,
  onCloseAuthModal,
  onAbortSignUp,
  ...props
}: GlobalNavigationBarProps) => {
  const rootClassName = tw(styles.root, className);
  const pathName = usePathname();
  const profileImgUrl = useUserImageUrl();
  const { setIsOpenSignUpModal } = useAuthActions();
  const router = useRouter();
  const userNickname = useUserNickname();
  const userEmail = useUserEmail();

  const handleClickLoginButton = () => {
    setIsOpenSignUpModal(true);
    router.push(SIGN_UP_ROUTES.SIGN_UP);
  };

  const checkIsSignedIn = () => {
    if (isSignedIn) return true;
    setIsOpenSignUpModal(true);
    router.push(SIGN_UP_ROUTES.SIGN_UP);
    return false;
  };

  const handleRouter = (route: Route) => {
    if (!checkIsSignedIn()) return;
    router.push(route);
  };

  return (
    <>
      <header {...props} className={rootClassName}>
        <nav className="flex items-center gap-[115px]">
          <ul>
            <li className={styles.link} onClick={() => router.push(ROUTES.HOME)}>
              <Image src={HomeLogo} className="w-[142px] h-[31px]" alt="home-logo" />
            </li>
          </ul>
          <ul className="flex items-center gap-[24px]">
            <li
              className={cn(styles.link, { [styles.focus]: pathName === ROUTES.EXPERIENCE })}
              onClick={() => handleRouter(ROUTES.EXPERIENCE as Route)}>
              경험분해
            </li>
            <li
              className={cn(styles.link, { [styles.focus]: pathName.startsWith(ROUTES.RESUMES) })}
              onClick={() => handleRouter(ROUTES.RESUMES as Route)}>
              자기소개서 작성하기
            </li>
            <li
              className={cn(styles.link, { [styles.focus]: pathName === '/collection/experiences' })}
              onClick={() => handleRouter('/collection/experiences' as Route)}>
              모아보기
            </li>
          </ul>
        </nav>
        {isRequesting ? (
          <Flex width={140} justifyContent={'center'}>
            <Spinner size="L" style="primary500" />
          </Flex>
        ) : isSignedIn ? (
          <div className="relative">
            <GnbMyPage
              className={cn(styles.link, styles.myPage, { [styles.focus]: pathName === ROUTES.MY_PAGE })}
              profileImgUrl={profileImgUrl}
              nickname={userNickname}
              email={userEmail}
            />
          </div>
        ) : (
          <Button
            variant="outlined"
            size="L"
            leftIcon={<IconGoogleLogo />}
            preserveOriginalIconColor
            onClick={handleClickLoginButton}>
            구글 로그인
          </Button>
        )}
      </header>
      <Suspense>
        <AuthModal isOpen={isOpenSignUpModal} onClose={onCloseAuthModal} onAbortSignUp={onAbortSignUp} />
      </Suspense>
    </>
  );
};

export default GlobalNavigationBar;
