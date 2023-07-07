'use client';

import { Route } from 'next';
import { useRouter } from 'next/navigation';

import Button from '../Button/Button';

type StartButtonProps = {
  route: Route;
  children: string;
};

const StartButton = ({ route, children }: StartButtonProps) => {
  const router = useRouter();

  return (
    <Button variant="primary" size="XL" onClick={() => router.push(route)}>
      {children}
    </Button>
  );
};

export default StartButton;
