import { forwardRef } from 'react';
import IconGoogleLogo from '@/components/Icon/IconGoogleLogo';
import { tw } from '@/shared/utils/tailwindMerge';
import styles from './GoogleLoginButton.module.scss';

type GoogleLoginButtonProps = MergeComponentProps<'button'>;

const GoogleLoginButton = forwardRef<HTMLButtonElement, GoogleLoginButtonProps>(
  ({ className, onClick, ...props }, ref) => {
    const rootClassName = tw(styles.root, className);

    return (
      <button {...props} ref={ref} className={rootClassName} onClick={onClick}>
        <IconGoogleLogo />
        <span>구글 로그인</span>
      </button>
    );
  }
);

GoogleLoginButton.displayName = 'GoogleLoginButton';

export default GoogleLoginButton;
