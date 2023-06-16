'use client';

import GlobalNavigationBar from '@/components/GlobalNavigationBar/GlobalNavigationBar';
import useGoogleLogin from '@/feature/auth/hooks/useGoogleLogin';

export default function Template({ children }: StrictPropsWithChildren) {
  const { isSignedIn, signIn } = useGoogleLogin();
  return (
    <>
      <GlobalNavigationBar isSignedIn={isSignedIn} signIn={signIn} />
      {children}
    </>
  );
}
