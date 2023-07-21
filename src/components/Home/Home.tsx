import dynamic from 'next/dynamic';
import Image from 'next/image';
import Home1 from 'public/images/home/img-home-1.png';
import Home2 from 'public/images/home/img-home-2.png';
import Home3 from 'public/images/home/img-home-3.png';
import Home4 from 'public/images/home/img-home-4.png';
import Home5 from 'public/images/home/img-home-5.png';
import Home6 from 'public/images/home/img-home-6.png';
import HomeEllipsisLeft from 'public/images/home/img-home-ellipsis-left.png';
import HomeLogo from 'public/images/home/img-home-logo.png';
import LumosNocard from 'public/images/lumos-nocard.png';

import { ROUTES } from '@/shared/constants/routes';

import Badge from '../Badge/Badge';
import SvgIconChevronRight from '../Icon/IconChevronRight';
import SvgIconPairQuotation from '../Icon/IconPairQuotation';
import AnalyzeCard from './AnalyzeCard';
import FeedbackForm from './FeedbackForm';
import FooterNav from './FooterNav';
import StartButton from './StartButton';

const Lottie = dynamic(() => import('@/components/Lottie/Lottie'));
const ANALYZE_CARD = ['직무 선택', '경험 작성', '직무 역량 추진', '경험카드 생성'];

const Home = () => {
  return (
    <>
      <main className="overflow-hidden">
        <section className="flex flex-col justify-center items-center pt-[154px] pb-[40px] bg-white">
          <h1 className="text-center h1 whitespace-pre-line mb-[24px]">
            {'자기소개서가 막막한 순간,\n그 시작을 함께하는 인사이트 아웃'}
          </h1>
          <p className="text-center subhead3 mb-[48px]">
            경험분해부터, AI 직무역량 키워드 추천, AI 자기소개서 작성까지 취업 준비 과정의 고민을 해결해보세요
          </p>
          <StartButton route={ROUTES.EXPERIENCE}>경험 분해 시작하기</StartButton>
        </section>

        <section className="relative h-[944px] bg-gradient-to-t from-[#958CFF] via-[#BDB8FC] to-[#FFF]">
          <Image src={Home1} fill alt="Home-1" className="object-contain" priority loading={'eager'} />
        </section>

        <section className="flex-center flex-col pt-[114px] pb-[160px] bg-[#2B2D36] text-white">
          <Image src={LumosNocard} alt="루모스" width={264} height={203} />
          <h2 className="h2 mt-[27px] mb-[12px]">자기소개서 작성이 고민인 취업준비생이신가요?</h2>
          <p className="subhead3">인사이트아웃에서 고민을 해결해보세요!</p>
        </section>

        <section className="relative flex items-center justify-between pt-[194px] bg-white z-[-1]">
          <Image src={HomeEllipsisLeft} alt="ellipsis" className="z-[-1]" />
          <div className="flex flex-col gap-[44px] mb-[476px]">
            <div className="flex flex-col w-[588px] gap-[30px]">
              <Badge variant="primary200-outline" size="L">
                경험분해 4 STEPS
              </Badge>
              <h2 className="whitespace-pre-line h2">{'4가지 질문으로 끝내는\n 직무 경험분해'}</h2>
              <div className="flex flex-col gap-[16px]">
                <p className="text-light text-[16px] font-medium whitespace-pre-line">
                  {
                    '자기소개서를 쓰기 전 나의 직무 역량과 강점을 파악해보세요.\n경험분해를 통해 직무 경험을 논리적으로 구조화하고 경험 카드를\n바탕으로 자기소개서를 작성해보세요.'
                  }
                </p>
              </div>
            </div>
            <div className="flex items-center w-[612px] py-[24px] border-y-[1px] border-solid border-gray-200 gap-[14px]">
              {ANALYZE_CARD.map((title, index) => (
                <>
                  <AnalyzeCard key={title} index={index + 1} title="직무 선택" />
                  {index + 1 < ANALYZE_CARD.length && <SvgIconChevronRight />}
                </>
              ))}
            </div>
          </div>
          <div className="relative after:content-[''] after:absolute after:bottom-0 after:right-0 after:w-[100%] after:h-[264px] after:bg-gradient-to-t after:from-[#FFF] after:to-[rgba(255, 255, 255, 0.00))]">
            <Image src={Home2} alt="경험분해-경험내용" />
          </div>
        </section>

        <section className="flex-center flex-col pt-[113px] pb-[121px] bg-gradient-to-b from-[#F2F9FA] from-0% via-[rgba(243, 250, 251, 0.24)] via-[8.71%] to-[rgba(243, 251, 252, 0.00)] to-100% bg-white">
          <div className="flex-center flex-col gap-[30px] mb-[68px]">
            <Badge variant="secondary50-outline" size="L">
              인공지능 기반 추천
            </Badge>
            <h2 className="text-center whitespace-pre-line h2">
              {'입력한 경험을 바탕으로\nAI에게 직무역량 키워드와 자기소개서를 추천받아요'}
            </h2>
            <p className="text-center whitespace-pre-line text-sub text-subhead3">
              {
                '겪었던 경험들을 편하게 이야기해주세요.\n똑똑한 인공지능이 경험을 분석하고 어울리는 직무 역량 키워드를 추천해줄게요.\n나도 몰랐던 나의 장점들을 발견해줘요!'
              }
            </p>
          </div>
          <Image src={Home3} alt="경험분해-직무역량검증하기" width={2280} height={1507} />
        </section>

        <section className="relative flex-center flex-col pb-[152px] bg-white z-[-1]">
          <div className="flex-center flex-col mb-[68px] gap-[30px]">
            <div className="flex-center flex-col pb-[12px] gap-[30px] text-center">
              <Badge variant="primary200-outline" size="L">
                자기소개서 작성까지 한번에
              </Badge>
              <h2 className="whitespace-pre-line h2">{'자기소개서 작성이 막막할땐\n경험카드를 참고해요'}</h2>
            </div>
            <p className="text-center whitespace-pre-line b1 text-sub text-subhead3">
              {
                '설문조사 결과 51%이상의 구직자는 자기소개서 작성할 때 어떻게 시작할지 몰라 어려움을 겪는다는 문제를 발견했습니다.\n작성한 경험을 역량별로 분류해서 자기소개서를 작성할때 확인해보세요.'
              }
            </p>
          </div>
          <Image src={Home4} alt="자기소개서 작성" width={1800} height={990} />
          <div className="flex gap-[34px] mt-[32px]">
            <Image src={Home5} alt="경험카드" className="max-w-[1150px] max-h-[901px] basis-2/3" />
            <Image src={Home6} alt="경험카드 이미지" className="max-w-[616px] max-h-[901px] basis-1/3" />
          </div>
        </section>

        <section
          className="flex flex-col w-full h-[1024px] pb-[144px] bg-no-repeat bg-center bg-cover"
          style={{ backgroundImage: 'url("/images/home/img-home-7.png")' }}>
          <div className="flex flex-col justify-center items-center h-full gap-[30px] text-white">
            <Badge size="L" variant="primary50-outline">
              사용자 후기
            </Badge>
            <h2 className="text-center whitespace-pre-line h2">{'인사이트 아웃을 경험해본\n사용자들의 이야기 🎉'}</h2>
            <p className="text-center b1">
              자기소개서 작성이 막막한 그 순간, 인사이트아웃에서 만든 경험카드가 큰 힘이 되어주었어요.
            </p>
            <StartButton route={ROUTES.EXPERIENCE}>경험카드 만들기</StartButton>
          </div>
          <div className="flex items-center justify-center gap-[24px]">
            <div className="flex flex-col w-[384px] h-[374px] py-[48px] px-[38px] rounded-[30px] bg-[#282469] opacity-[0.8] shrink-0">
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
            <div className="flex flex-col w-[384px] h-[374px] py-[48px] px-[38px] rounded-[30px] bg-[#282469] opacity-[0.8] shrink-0">
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
            <div className="flex flex-col w-[384px] h-[374px] py-[48px] px-[38px] rounded-[30px] bg-[#282469] opacity-[0.8] shrink-0">
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

      <footer className="flex flex-col justify-center items-center h-[416px] bg-dark pt-[66px] pb-[35px]">
        <Image src={HomeLogo} className="w-[192px] h-[41px] mb-[35px]" alt="home-logo" />
        <p className="text-center text-white whitespace-pre-line b3 mb-[20px]">
          {'인사이트아웃은 모든 초보 구직자들을 응원합니다.\n더 나은 서비스를 위해 피드백 해주세요!'}
        </p>
        <FeedbackForm />
        <FooterNav />
        <div className="flex justify-between items-center max-w-[1200px] w-full">
          <span className="text-white c1">Copyrighted © insightout all rights reserved.</span>
          <span className="text-white c1">
            협업문의&nbsp;
            <a href="mailto:team.insightout@gmail.com" className="underline">
              team.insightout@gmail.com
            </a>
          </span>
        </div>
      </footer>

      <div className="hidden">
        <Lottie src="/lotties/lumos-loading.json" />
        <Lottie src="/lotties/lumos-hi.json" />
        <Lottie src="/lotties/lumos-smile.json" />
      </div>
    </>
  );
};

export default Home;
