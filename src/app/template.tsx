'use client';

import GlobalNavigationBar from '@/components/GlobalNavigationBar/GlobalNavigationBar';
import OnboardingProvider from '@/components/Providers/OnboardingProvider';
import AuthProvider from '@/features/auth/components/Providers/AuthProvider';
import { useIsRequesting, useIsSignedIn } from '@/features/auth/store';

export default function Template({ children }: StrictPropsWithChildren) {
  const isSignedIn = useIsSignedIn();
  const isRequesting = useIsRequesting();

  return (
    <AuthProvider>
      <GlobalNavigationBar isSignedIn={isSignedIn} isRequesting={isRequesting} />
      <OnboardingProvider>{children}</OnboardingProvider>
    </AuthProvider>
  );
}
