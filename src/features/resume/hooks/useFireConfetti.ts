import { useCallback, useRef } from 'react';

import { colors } from '@/styles/theme/foundations/colors';

const useFireConfetti = () => {
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

  // const handleOnClick = () => {
  //   console.log(x, y);
  //   const confetti = refAnimationInstance.current as any;
  //   const confettiConfig = {
  //     particleCount: 100,
  //     startVelocity: 30,
  //     spread: 360,
  //     origin: { x, y },
  //   };
  //   confetti && makeShot(0.25, confettiConfig);
  // };

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

  return { getInstance, fire };
};

export default useFireConfetti;
