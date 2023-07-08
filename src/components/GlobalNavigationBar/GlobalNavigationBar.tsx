import { ComponentPropsWithoutRef } from 'react';

import { Flex, useToast } from '@chakra-ui/react';
import cn from 'classnames';
import { Route } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';

import AuthModal from '@/features/auth/components/AuthModal/AuthModal';
import { useAuthActions } from '@/features/auth/store';
import { ROUTES, SIGN_UP_ROUTES } from '@/shared/constants/routes';
import { useUserImageUrl } from '@/shared/store/user';
import { tw } from '@/shared/utils/tailwindMerge';

import Button from '../Button/Button';
import SvgIconGnbMyPage from '../Icon/IconGnbMyPage';
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
  const toast = useToast();

  const handleClickLoginButton = () => {
    setIsOpenSignUpModal(true);
    router.push(SIGN_UP_ROUTES.SIGN_UP);
  };

  const handleClickMyPage = () => {
    toast({
      title: '마이 페이지는 준비 중이에요',
      status: 'info',
      duration: 2000,
      isClosable: true,
      position: 'top',
    });
    return;
  };

  const checkIsSignedIn = () => {
    if (isSignedIn) return true;
    setIsOpenSignUpModal(true);
    router.push(SIGN_UP_ROUTES.SIGN_UP);
    return false;
  };

  const handleClickExperience = () => {
    if (!checkIsSignedIn()) return;
    router.push(ROUTES.EXPERIENCE as Route);
  };

  const handleClickResumes = () => {
    if (!checkIsSignedIn()) return;
    router.push(ROUTES.RESUMES as Route);
  };

  const handleClickCollection = () => {
    if (!checkIsSignedIn()) return;
    // @TODO ROUTES 상수에 모아보기 라우터 추가 필요
    router.push('/collection/experiences' as Route);
  };

  return (
    <>
      <header {...props} className={rootClassName}>
        <nav className="flex items-center gap-[115px]">
          <ul>
            <li className={styles.link} onClick={() => router.push(ROUTES.HOME)}>
              <Image
                src={'/images/home/img-home-logo.png'}
                className="w-[142px] h-[31px]"
                width={142}
                height={31}
                alt="home-logo"
              />
            </li>
          </ul>
          <ul className="flex items-center gap-[24px]">
            <li
              className={cn(styles.link, { [styles.focus]: pathName === ROUTES.EXPERIENCE })}
              onClick={handleClickExperience}>
              경험분해
            </li>
            <li
              className={cn(styles.link, { [styles.focus]: pathName === ROUTES.RESUMES })}
              onClick={handleClickResumes}>
              자기소개서 작성하기
            </li>
            <li
              className={cn(styles.link, { [styles.focus]: pathName === '/collection/experiences' })}
              onClick={handleClickCollection}>
              모아보기
            </li>
          </ul>
        </nav>
        {isRequesting ? (
          <Flex width={140} justifyContent={'center'}>
            <Spinner size="L" style="primary500" />
          </Flex>
        ) : isSignedIn ? (
          <Link
            className={cn(styles.link, styles.myPage, { [styles.focus]: pathName === '/demo' })}
            href={'#' as Route}>
            <Flex justifyContent={'space-between'} alignItems={'center'} gap={'10px'} onClick={handleClickMyPage}>
              {profileImgUrl.length > 0 ? (
                <div className={styles['user-profile']}>
                  <Image src={profileImgUrl} width={20} height={20} alt="use-profile" />
                </div>
              ) : (
                <SvgIconGnbMyPage width={32} height={32} />
              )}
              마이 페이지
            </Flex>
          </Link>
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
      <AuthModal isOpen={isOpenSignUpModal} onClose={onCloseAuthModal} onAbortSignUp={onAbortSignUp} />
    </>
  );
};

export default GlobalNavigationBar;
