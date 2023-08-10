import React, { useEffect } from 'react';

import Image from 'next/image';
import ExperienceImg3 from 'public/images/home/img-home-experience-2.png';
import ExperienceImg1 from 'public/images/home/img-home-experience-3.png';
import ExperienceImg2 from 'public/images/home/img-home-experience-4.png';
import LumosNocard from 'public/images/lumos-nocard.png';

import { useBlockScroll } from '@/hooks/useBlockScroll';

import Tag from '../Tag/Tag';

const ServiceList = [
  {
    src: ExperienceImg1,
    title: 'AI가 알려주는 내 직무역량은?',
    subTitle: '경험분해 및 역량 키워드 추천',
  },
  {
    src: ExperienceImg2,
    title: '어떤 게 내 강점일까?',
    subTitle: '경험카드를 모아서 내 핵심역량 찾기',
  },
  {
    src: ExperienceImg3,
    title: '자기소개서 작성까지 한번에',
    subTitle: 'AI 추천 자소서를 토대로 글 작성까지!',
  },
];

const OnlyPCSupport = () => {
  useBlockScroll(true);

  useEffect(() => {
    document.body.style.backgroundColor = '#fff';
    return () => {
      document.body.style.backgroundColor = '#f5f5f5';
    };
  }, []);
  return (
    <div className="fixed top-0 bottom-0 left-0 right-0 bg-white z-[99999]">
      <div className="flex-center flex-col mx-auto max-w-[360px] px-[20px] h-full">
        <Image src={LumosNocard} alt="lumos-nocard" width={173} placeholder="blur" />
        <span className="subhead1 mb-[4px] mt-[10px]">PC에서 접속해주세요</span>
        <p className="text-center b3 text-light mb-[48px]">
          아쉽게도 모바일은 지원하지 않아요🥲
          <br />
          PC버전으로 인사이트 아웃을 이용해주세요!
        </p>
        <div className="flex flex-col items-center w-full bg-gray-100 h-[300px] rounded-[24px] p-[24px]">
          <Tag size="S" variant="secondary50-outline" className="mb-[4px]">
            인사이트 아웃의 서비스
          </Tag>
          <span className="subhead4 mb-[12px]">이런 기능들을 무료로 쓸 수 있어요</span>
          <div className="flex flex-col mb-[9px] gap-[9px]">
            {ServiceList.map(({ src, title, subTitle }, index) => (
              <div key={title} className="py-[9px] px-[10px] bg-white rounded-[12px]">
                <div className="flex flex-row gap-[8px]">
                  <Image src={src} alt={`experience-image-${index}`} width={38} height={38} placeholder="blur" />
                  <div className="flex flex-col">
                    <span className="c1 text-light">{title}</span>
                    <span className="b3 text-main">{subTitle}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OnlyPCSupport;
