'use client';

import { useCallback, useEffect, useRef } from 'react';
import ReactCanvasConfetti from 'react-canvas-confetti';

import { colors } from '@/styles/theme/foundations/colors';

const Confetti = () => {
  const refAnimationInstance = useRef<any>(null);

  const getInstance = useCallback((instance: confetti.CreateTypes | null) => {
    refAnimationInstance.current = instance;
  }, []);

  const makeShot = useCallback((particleRatio: number, opts: object) => {
    refAnimationInstance.current &&
      refAnimationInstance.current({
        ...opts,
        zIndex: -1,
        origin: { y: 0.6 },
        particleCount: Math.floor(300 * particleRatio),
      });
  }, []);

  const fire = useCallback(() => {
    const { primary, secondary } = colors;
    const confettiColor = [primary[300], secondary[300], '#FF59F8'];
    const confettiShape = ['circle', 'star', 'square'];
    const commonConfettiOption = { confettiColor, confettiShape };

    makeShot(0.25, {
      spread: 100,
      startVelocity: 60,
      scalar: 1,
      ...commonConfettiOption,
    });

    makeShot(0.2, {
      spread: 120,
      startVelocity: 50,
      scalar: 1.2,
      ...commonConfettiOption,
    });

    makeShot(0.2, {
      spread: 160,
      startVelocity: 80,
      scalar: 1.8,
      decay: 0.91,
      ...commonConfettiOption,
    });

    makeShot(0.25, {
      spread: 260,
      decay: 0.94,
      scalar: 1.5,
      ...commonConfettiOption,
    });

    makeShot(0.2, {
      spread: 280,
      startVelocity: 25,
      decay: 0.94,
      scalar: 1.3,
      ...commonConfettiOption,
    });

    makeShot(0.1, {
      spread: 360,
      startVelocity: 45,
      decay: 0.93,
      scalar: 1.4,
      ...commonConfettiOption,
    });
  }, [makeShot]);

  useEffect(() => {
    fire();
  }, [fire]);

  return (
    <ReactCanvasConfetti
      refConfetti={getInstance}
      style={{
        position: 'fixed',
        pointerEvents: 'none',
        width: '100%',
        height: '100%',
        top: 0,
        left: 0,
      }}
    />
  );
};

export default Confetti;
