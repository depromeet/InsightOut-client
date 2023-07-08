import { useCallback, useRef } from 'react';
import ReactCanvasConfetti from 'react-canvas-confetti';

const Confetti = () => {
  const refAnimationInstance = useRef(null);

  const getInstance = useCallback((instance: any) => {
    refAnimationInstance.current = instance;
  }, []);

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
