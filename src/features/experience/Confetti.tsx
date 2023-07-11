'use client';

import { useCallback, useEffect, useRef } from 'react';
import ReactCanvasConfetti from 'react-canvas-confetti';

const Confetti = () => {
  const refAnimationInstance = useRef<any>(null);

  const getInstance = useCallback((instance: confetti.CreateTypes | null) => {
    refAnimationInstance.current = instance;
  }, []);

  const makeShot = useCallback((particleRatio: number, opts: object) => {
    refAnimationInstance.current &&
      refAnimationInstance.current({
        ...opts,
        origin: { y: 0.6 },
        particleCount: Math.floor(500 * particleRatio),
      });
  }, []);

  const fire = useCallback(() => {
    makeShot(0.2, {
      spread: 95,
      startVelocity: 50,
      scalar: 0.7,
    });

    makeShot(0.25, {
      spread: 100,
      startVelocity: 60,
      scalar: 0.5,
    });

    makeShot(0.2, {
      spread: 160,
      startVelocity: 80,
      scalar: 1.3,
      decay: 0.91,
    });

    makeShot(0.25, {
      spread: 260,
      decay: 0.94,
      scalar: 1,
    });

    makeShot(0.2, {
      spread: 280,
      startVelocity: 25,
      decay: 0.94,
      scalar: 0.8,
      shapes: ['circle', 'star', 'square'],
    });

    makeShot(0.1, {
      spread: 360,
      startVelocity: 45,
      decay: 0.93,
      scalar: 0.9,
      shapes: ['circle', 'star', 'square'],
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
