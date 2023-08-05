'use client';

import { useEffect } from 'react';
import ReactCanvasConfetti from 'react-canvas-confetti';

import useFireConfetti from '../resume/hooks/useFireConfetti';

const Confetti = () => {
  const { fire, getInstance } = useFireConfetti();

  useEffect(() => {
    fire();
  }, [fire]);

  return (
    <div>
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
    </div>
  );
};

export default Confetti;
