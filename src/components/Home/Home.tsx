'use client';

import Image from 'next/image';

import Badge from '../Badge/Badge';
import Button from '../Button/Button';
import SvgIconChevronRight from '../Icon/IconChevronRight';
import AnalyzeCard from './AnalyzeCard';

const Home = () => {
  return (
    <main>
      <section className="flex flex-col justify-center items-center pt-[230px] pb-[63px] bg-white">
        <h1 className="text-center text-[60px] font-bold leading-[80px] whitespace-pre-line mb-[26px]">
          {'자기소개서가 막막한 순간,\n그 시작을 함께하는\n인사이트 아웃'}
        </h1>
        <p className="text-center whitespace-pre-line mb-[52px]">
          {
            '인사이트 아웃을 통해 질문으로 나의 프로젝트를 정리하며 경험을 파헤치고\n나만의 경험 역량 카드로 만들어 자기소개서를 작성해보세요.'
          }
        </p>
        <Button variant="primary" size="XL">
          경험 분해 시작하기
        </Button>
      </section>
      <section className="relative h-[1014px] bg-white">
        <Image src={'/images/home/img-home-1.png'} fill alt="Home-1" className="object-contain w-full h-full" />
      </section>
      <section className="relative flex justify-center items-center pt-[170px] py-[286px] gap-[102px] bg-white z-[-1]">
        <div className="flex flex-col gap-[44px]">
          <div className="flex flex-col w-[588px] gap-[30px]">
            <Badge variant="primary50-outline" size="L">
              경험분해 4 STEPS
            </Badge>
            <h1 className="text-main text-[44px] font-bold whitespace-pre-line">{'질의응답으로\n 경험을 분해해요'}</h1>
            <div className="flex flex-col gap-[16px]">
              <p className="text-light text-[16px] font-medium whitespace-pre-line">
                {
                  '자기소개서 쓰기 전 경험분해를 통해 나의 직무 역량과 강점을 파악하고\n 면접으로 이어지는 것까지 고려하여 직무 강점을 어필할 수 있는 경험으로 분해 해야합니다.'
                }
              </p>
              <p className="text-light text-[16px] font-medium whitespace-pre-line">
                {
                  '인사이트 아웃을 통해 질문으로 나의 이력, 프로젝트를 정리하며 경험을 파헤치고\n나만의 경험 역량 카드로 만들어 자기소개서를 작성해보세요.'
                }
              </p>
            </div>
          </div>
          <div className="flex items-center w-[612px] py-[24px] border-y-[1px] border-solid border-gray-200 gap-[14px]">
            <AnalyzeCard
              image={
                <Image
                  src={'/images/home/img-home-experience-1.png'}
                  className="w-[80px] h-[80px]"
                  width={80}
                  height={80}
                  alt="home-experience-1"
                />
              }
              index={1}
              title="직무 선택"
            />
            <SvgIconChevronRight />
            <AnalyzeCard
              image={
                <Image
                  src={'/images/home/img-home-experience-2.png'}
                  className="w-[80px] h-[80px]"
                  width={80}
                  height={80}
                  alt="home-experience-2"
                />
              }
              index={2}
              title="경험 작성"
            />
            <SvgIconChevronRight />
            <AnalyzeCard
              image={
                <Image
                  src={'/images/home/img-home-experience-3.png'}
                  className="w-[80px] h-[80px]"
                  width={80}
                  height={80}
                  alt="home-experience-3"
                />
              }
              index={3}
              title="직무 역량 추진"
            />
            <SvgIconChevronRight />
            <AnalyzeCard
              image={
                <Image
                  src={'/images/home/img-home-experience-4.png'}
                  className="w-[80px] h-[80px]"
                  width={80}
                  height={80}
                  alt="home-experience-4"
                />
              }
              index={4}
              title="경험카드 생성"
            />
          </div>
        </div>
        <Image src={'/images/img-home-2.png'} width={486} height={486} alt="Home-2" />
        <Image
          src={'/images/img-home-ellipsis-1.png'}
          width={352}
          height={788}
          alt="home-ellipsis-1"
          className="absolute top-[413px] left-0 z-[-2]"
        />
      </section>
    </main>
  );
};

export default Home;
