'use client';

import { Route } from 'next';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

import { ROUTES } from '@/shared/constants/routes';

import Badge from '../Badge/Badge';
import Button from '../Button/Button';
import SvgIconChevronRight from '../Icon/IconChevronRight';
import SvgIconPairQuotation from '../Icon/IconPairQuotation';
import AnalyzeCard from './AnalyzeCard';
import Looper from './Looper';

const Home = () => {
  const router = useRouter();

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
        <Button variant="primary" size="XL" onClick={() => router.push(ROUTES.EXPERIENCE)}>
          경험 분해 시작하기
        </Button>
      </section>
      <section className="relative h-[1014px] bg-white">
        <Image src={'/images/home/img-home-1.png'} fill alt="Home-1" className="object-contain w-full h-full" />
      </section>
      <section className="relative flex flex-col justify-center items-center pt-[170px] pb-[283px] bg-white z-[-1]">
        <div className="flex justify-center items-center mb-[286px] gap-[102px]">
          <div className="flex flex-col gap-[44px]">
            <div className="flex flex-col w-[588px] gap-[30px]">
              <Badge variant="primary50-outline" size="L">
                경험분해 4 STEPS
              </Badge>
              <h1 className="text-main text-[44px] font-bold whitespace-pre-line">
                {'질의응답으로\n 경험을 분해해요'}
              </h1>
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
          <Image src={'/images/home/img-home-2.png'} width={486} height={486} alt="Home-2" />
        </div>
        <div className="flex flex-col items-center gap-[30px] w-[588px] mb-[170px]">
          <Badge variant="primary50-outline" size="L">
            AI 역량키워드 추천
          </Badge>
          <p className="text-center whitespace-pre-line h2">
            {'인공지능이 내 경험과 어울리는\n직무 키워드를 뽑아줘요'}
          </p>
          <div className="text-center text-light b1">
            <p>겪었던 경험들을 편하게 이야기해주세요.</p>
            <p>똑똑한 인공지능이 경험을 분석하고 어울리는 직무 역량 키워드를 추천해줄게요.</p>
            <p>나도 몰랐던 나의 장점들을 발견해줘요!</p>
          </div>
        </div>
        <div className="flex flex-col gap-[32px] w-full bg-white z-[-1]">
          <Looper speed={20} direction="right">
            <Looper.Card name="일잘러" />
            <Looper.Card name="집요함" />
            <Looper.Card name="정의의 사도" />
            <Looper.Card name="아이디어뱅크" />
          </Looper>
          <Looper speed={20} direction="left">
            <Looper.Card name="이 시대의 리더" />
            <Looper.Card name="집요함" />
            <Looper.Card name="커뮤니케이터" />
            <Looper.Card name="일잘러" />
            <Looper.Card name="문제해결" />
            <Looper.Card name="집요함" />
          </Looper>
        </div>
        <Image
          src={'/images/home/img-home-ellipsis-left.png'}
          className="absolute top-[413px] left-[-350px] w-[788px] h-[788px] z-[-1]"
          width={788}
          height={788}
          alt="Home-ellipsis-left"
          loading="eager"
        />
      </section>
      <section className="flex flex-col items-center justify-center pb-[296px] bg-white">
        <div className="flex justify-center items-end h-[185px] mb-[103px] gap-[24px]">
          <div className="flex flex-col w-[588px] pb-[12px] gap-[30px]">
            <Badge variant="primary50-outline" size="L">
              자기소개서 작성까지 한번에
            </Badge>
            <h2 className="whitespace-pre-line h2">{'쓰는게 막막할때,\n경험카드를 참고해요'}</h2>
          </div>
          <div className="flex flex-col justify-end w-[588px] gap-[16px] b1 text-light">
            <p>
              설문조사 결과 과반수 이상의 구직자는 자기소개서 작성할 때 어떻게 시작할지 몰라서 어려움을 겪는다는 문제를
              발견했습니다.
            </p>
            <p>
              인사이트아웃에서 내 경험들을 역량별로 분류해서 불러올 수 있어요! 역량 키워드 태그를 통해서 문항과 잘
              어울리는 경험카드들을 확인해보세요.
            </p>
          </div>
        </div>
        <div className="relative max-w-[1200px] w-full h-[462px]">
          <Image src={'/images/home/img-home-3.png'} fill alt="Home-3" />
        </div>
      </section>
      <section className="flex flex-col w-full h-[1024px] bg-no-repeat bg-center bg-cover bg-home-5">
        <div className="flex flex-col justify-center items-center h-full gap-[30px] text-white">
          <Badge size="L" variant="primary50-outline">
            사용자 후기
          </Badge>
          <h1 className="text-center whitespace-pre-line h1">{'인사이트 아웃을 경험해본\n사용자들의 이야기 🎉'}</h1>
          <p className="text-center b1">
            자기소개서 작성이 막막한 그 순간, 인사이트아웃에서 만든 경험카드가 큰 힘이 되어주었어요.
          </p>
          {/* @TODO 경험카드 만들기 페이지 라우터 연결 */}
          <Button size="XL" variant="primary" onClick={() => router.push('#' as Route)}>
            경험카드 만들기
          </Button>
        </div>
        <div className="flex items-center justify-center gap-[24px]">
          <div className="flex flex-col w-[384px] h-[374px] py-[48px] px-[38px] rounded-[30px] bg-[#282469] opacity-[0.8]">
            <SvgIconPairQuotation className="mb-[8px]" />
            <p className="text-primary-50 text-[28px] font-bold leading-[38px] mb-[10px]">
              경험 정리의 시작점이 되어줬어요.
            </p>
            <p className="text-primary-50 text-[20px] font-bold leading-[28px] mb-[8px]">
              내 경험을 키워드로 정리해보고 싶었는데 인사이트아웃이 그 시작점을 찾아줬어요. 이걸로 방향성을 잡고
              자기소개서를 작성했어요.
            </p>
            <p className="text-primary-300 text-[20px] font-bold leading-[28px]">ios 개발 취준생, 박OO</p>
          </div>
          <div className="flex flex-col w-[384px] h-[374px] py-[48px] px-[38px] rounded-[30px] bg-[#282469] opacity-[0.8]">
            <SvgIconPairQuotation className="mb-[8px]" />
            <p className="text-primary-50 text-[28px] font-bold leading-[38px] mb-[10px]">
              경험을 새롭게 표현할 수 있었어요.
            </p>
            <p className="text-primary-50 text-[20px] font-bold leading-[28px] mb-[8px]">
              계속 써왔던 표현에서 벗어나 새로운 말로 바꿔서 경험을 적을 수 있는 점이 좋아요. 같은 경험이지만 역량을
              다르게 표현할 수 있었어요.
            </p>
            <p className="text-primary-300 text-[20px] font-bold leading-[28px]">UXUI 디자인 취준생, 박OO</p>
          </div>
          <div className="flex flex-col w-[384px] h-[374px] py-[48px] px-[38px] rounded-[30px] bg-[#282469] opacity-[0.8]">
            <SvgIconPairQuotation className="mb-[8px]" />
            <p className="text-primary-50 text-[28px] font-bold leading-[38px] mb-[10px]">
              몰랐던 직무 어필포인트를 발견했어요.
            </p>
            <p className="text-primary-50 text-[20px] font-bold leading-[28px] mb-[8px]">
              역량 키워드를 분석해주는 것만으로도 자소서 작성에 참고가 많이 됐어요. 특히 AI 키워드 추천 덕분에 몰랐던
              직무 어필 포인트를 발견했어요.
            </p>
            <p className="text-primary-300 text-[20px] font-bold leading-[28px]">UXUI 디자인 취준생, 전OO</p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
