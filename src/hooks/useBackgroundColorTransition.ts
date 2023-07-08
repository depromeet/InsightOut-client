import { useEffect, useState } from 'react';

type Color = [number, number, number];

const useBackgroundColorTransition = (initialColor: Color, finalColor: Color, duration: number = 1000) => {
  const [color, setColor] = useState(initialColor);

  const rgbToHex = (color: Color): string => {
    return `#${color.map((digit) => digit.toString(16).padStart(2, '0')).join('')}`;
  };

  useEffect(() => {
    const [rInitial, gInitial, bInitial] = initialColor;
    const [rFinal, gFinal, bFinal] = finalColor;

    const rDifference = rFinal - rInitial;
    const gDifference = gFinal - gInitial;
    const bDifference = bFinal - bInitial;

    const framesPerSecond = 60;
    const totalFrames = Math.ceil(framesPerSecond * (duration / 1000));
    let currentFrame = 0;

    const interval = setInterval(() => {
      currentFrame++;
      const percentComplete = currentFrame / totalFrames;

      const rCurrent = Math.round(rInitial + rDifference * percentComplete);
      const gCurrent = Math.round(gInitial + gDifference * percentComplete);
      const bCurrent = Math.round(bInitial + bDifference * percentComplete);

      setColor([rCurrent, gCurrent, bCurrent]);

      if (currentFrame === totalFrames) clearInterval(interval);
    }, duration / totalFrames);

    return () => clearInterval(interval);
  }, [initialColor, finalColor, duration]);

  return {
    color: rgbToHex(color),
  };
};

export default useBackgroundColorTransition;
