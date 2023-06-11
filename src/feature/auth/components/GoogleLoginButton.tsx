import { ComponentPropsWithRef, forwardRef } from 'react';
import IconGoogleLogo from '@/components/Icon/IconGoogleLogo';
import { tw } from '@/shared/utils/tailwindMerge';
import useGoogleLogin from '../hooks/useGoogleLogin';
import styles from './GoogleLoginButton.module.scss';

type GoogleLoginButtonProps = ComponentPropsWithRef<'button'>;

const GoogleLoginButton = forwardRef<HTMLButtonElement, GoogleLoginButtonProps>(({ className, ...props }, ref) => {
  const rootClassName = tw(styles.root, className);
  const { signIn } = useGoogleLogin();

  return (
    <button {...props} ref={ref} className={rootClassName} onClick={signIn}>
      <IconGoogleLogo />
      <span>구글 로그인</span>
    </button>
  );
});

GoogleLoginButton.displayName = 'GoogleLoginButton';

export default GoogleLoginButton;
