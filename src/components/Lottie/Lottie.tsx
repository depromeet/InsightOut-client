'use client';

import { HTMLAttributes, memo, useEffect, useRef } from 'react';

import lottie, { AnimationItem } from 'lottie-web';

interface LottieProps extends HTMLAttributes<HTMLElement> {
  src: string;
  loop?: boolean;
  autoplay?: boolean;
}

const Lottie = ({ src, loop = true, autoplay = true, ...restProps }: LottieProps) => {
  const container = useRef<HTMLDivElement | null>(null);
  const player = useRef<AnimationItem | null>(null);

  useEffect(() => {
    if (container.current === null) {
      return;
    }

    player.current = lottie.loadAnimation({
      container: container.current,
      loop,
      autoplay,
      renderer: 'svg',
      path: src,
      rendererSettings: {
        progressiveLoad: true,
        hideOnTransparent: true,
      },
    });

    return () => {
      player.current?.destroy();
    };
  }, [autoplay, loop, src]);

  return <div ref={container} {...restProps} />;
};

export default memo(Lottie);
