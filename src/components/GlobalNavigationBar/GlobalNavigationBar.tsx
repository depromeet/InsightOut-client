'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Flex } from '@chakra-ui/react';
import cn from 'classnames';
import IconGoogleLogo from '@/components/Icon/IconGoogleLogo';
import { tw } from '@/shared/utils/tailwindMerge';
import { ROUTES } from '@/shared/constants/routes';
import useGoogleLogin from '@/feature/auth/hooks/useGoogleLogin';
import styles from './GNB.module.scss';

type GlobalNavigationBarProps = MergeComponentProps<'header', { className?: string }>;

const GlobalNavigationBar = ({ className }: GlobalNavigationBarProps) => {
  const rootClassName = tw(styles.root, className);
  const pathName = usePathname();
  const { isSignedIn, signIn } = useGoogleLogin();

  return (
    <header className={rootClassName}>
      <Flex alignItems={'center'} gap={'115px'}>
        <Link
          className={cn(styles.link, { [styles.focus]: pathName === ROUTES.HOME })}
          href={{ pathname: ROUTES.HOME }}>
          로고
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
      {isSignedIn ? (
        <Link
          className={cn(styles.link, styles.myPage, { [styles.focus]: pathName === '/demo' })}
          href={{ pathname: '/demo' }}>
          <Flex justifyContent={'space-between'} alignItems={'center'} gap={'10px'}>
            <div className={styles['user-profile']} />
            마이 페이지
          </Flex>
        </Link>
      ) : (
        <>
          <button className={styles['google-login-button']} onClick={signIn}>
            <IconGoogleLogo />
            <span>구글 로그인</span>
          </button>
        </>
      )}
    </header>
  );
};

export default GlobalNavigationBar;
