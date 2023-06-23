'use client';

import GlobalNavigationBar from '@/components/GlobalNavigationBar/GlobalNavigationBar';
import AuthProvider from '@/features/auth/components/Providers/AuthProvider';
import useGoogleLogin from '@/features/auth/hooks/useGoogleLogin';
import { useIsSignedIn } from '@/features/auth/store';

export default function Template({ children }: StrictPropsWithChildren) {
  // FIXME: Cross-Origin-Opener-Policy policy would block the window.close call. 오류로 인해 isSignedIn을 리턴하지 못하고 있음
  const { signIn } = useGoogleLogin();
  const isSignIn = useIsSignedIn();

  return (
    <AuthProvider>
      <GlobalNavigationBar isSignedIn={isSignIn} signIn={signIn} />
      {children}
    </AuthProvider>
  );
}
