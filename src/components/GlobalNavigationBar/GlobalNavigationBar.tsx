import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ComponentPropsWithoutRef } from 'react';
import { Flex } from '@chakra-ui/react';
import cn from 'classnames';
import { tw } from '@/shared/utils/tailwindMerge';
import { ROUTES } from '@/shared/constants/routes';
import styles from './GlobalNavigationBar.module.scss';
import Button from '../Button/Button';
import IconGoogleLogo from '../Icon/IconGoogleLogo';

type GlobalNavigationBarProps = ComponentPropsWithoutRef<'header'> & {
  /**
   * 로그인 되어있는지 여부
   */
  isSignedIn: boolean;
  /**
   * 구글 로그인 함수
   */
  signIn: () => void;
};

const GlobalNavigationBar = ({ className, isSignedIn, signIn, ...props }: GlobalNavigationBarProps) => {
  const rootClassName = tw(styles.root, className);
  const pathName = usePathname();

  return (
    <header {...props} className={rootClassName}>
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
        <Button variant="outlined" size="L" leftIcon={<IconGoogleLogo />} preserveOriginalIconColor onClick={signIn}>
          구글 로그인
        </Button>
      )}
    </header>
  );
};

export default GlobalNavigationBar;
