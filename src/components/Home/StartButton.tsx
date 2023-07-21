'use client';

import { Route } from 'next';
import { useRouter } from 'next/navigation';

import { useAuthActions, useIsSignedIn } from '@/features/auth/store';

import Button from '../Button/Button';

type StartButtonProps = {
  route: Route;
  children: string;
};

const StartButton = ({ route, children }: StartButtonProps) => {
  const isSignedIn = useIsSignedIn();
  const { setIsOpenSignUpModal } = useAuthActions();
  const router = useRouter();

  const checkIsSignedIn = () => {
    if (isSignedIn) return true;
    setIsOpenSignUpModal(true);
    router.push('/?steps=signUp');
    return false;
  };

  const handleClickButton = () => {
    if (!checkIsSignedIn()) return;
    router.push(route);
  };

  return (
    <Button variant="gray900" size="XL" onClick={handleClickButton}>
      {children}
    </Button>
  );
};

export default StartButton;
