import { ComponentPropsWithoutRef } from 'react';

import { Flex } from '@chakra-ui/react';
import cn from 'classnames';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';

import { useAuthActions } from '@/features/auth/store';
import GnbMyPage from '@/features/myPage/components/GlobalNavigationBar/GnbMyPage';
import { ROUTES } from '@/shared/constants/routes';
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
};

const GlobalNavigationBar = ({ className, isSignedIn, isRequesting, ...props }: GlobalNavigationBarProps) => {
  const rootClassName = tw(styles.root, className);
  const pathName = usePathname();
  const profileImgUrl = useUserImageUrl();
  const userNickname = useUserNickname();
  const userEmail = useUserEmail();
  const { setIsOpenSignUpModal } = useAuthActions();
  const router = useRouter();

  const handleClickLoginButton = () => {
    setIsOpenSignUpModal(true);
    router.push('/?steps=signUp');
  };

  return (
    <header {...props} className={rootClassName}>
      <Flex alignItems={'center'} gap={'115px'}>
        <Link className={styles.link} href={{ pathname: ROUTES.HOME }}>
          <Image
            src={'/images/home/img-home-logo.png'}
            className="w-[142px] h-[31px]"
            width={142}
            height={31}
            alt="home-logo"
          />
        </Link>
        <Flex alignItems={'center'} gap={'24px'}>
          <Link
            className={cn(styles.link, { [styles.focus]: pathName === ROUTES.EXPERIENCE })}
            href={{ pathname: ROUTES.EXPERIENCE }}>
            경험분해
          </Link>
          <Link className={cn(styles.link, { [styles.focus]: pathName === '/demo' })} href={{ pathname: '/demo' }}>
            자기소개서 작성하기
          </Link>
          <Link
            className={cn(styles.link, { [styles.focus]: pathName === '/collection/experiences' })}
            href={{ pathname: '/collection/experiences' }}>
            모아보기
          </Link>
        </Flex>
      </Flex>
      {isRequesting ? (
        <Flex width={140} justifyContent={'center'}>
          <Spinner size="L" style="primary500" />
        </Flex>
      ) : isSignedIn ? (
        <div className="relative">
          <GnbMyPage
            className={cn(styles.link, styles.myPage, { [styles.focus]: pathName === '/demo' })}
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
  );
};

export default GlobalNavigationBar;
