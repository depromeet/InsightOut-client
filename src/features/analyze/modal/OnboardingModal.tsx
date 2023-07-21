import Image from 'next/image';
import AnalyzeOnboarding from 'public/images/analyze/img-analyze-onboarding.png';

import SvgIconNumber1 from '@/components/Icon/IconNumber1';
import SvgIconNumber2 from '@/components/Icon/IconNumber2';
import SvgIconNumber3 from '@/components/Icon/IconNumber3';
import Modal from '@/components/Modal/Modal';
import ModalFooter from '@/components/Modal/ModalFooter';
import ModalHeader from '@/components/Modal/ModalHeader';

type OnboardingModalProps = {
  isOpen: boolean;
  nickname: string;
  onClose: () => void;
  onClickMainButton: () => void;
};

const OnboardingModal = ({ isOpen, nickname, onClose, onClickMainButton }: OnboardingModalProps) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} size={'5xl'}>
      <ModalHeader>
        <ModalHeader.Title
          title="경험분해가 처음이신가요?"
          subTitle={`자기소개서를 쓰기 전 경험 분해를 통해 나의 직무 강점을 파악하는 것은 매우 중요합니다. 면접까지 이어지기 때문인데요,\n앞으로 나올 질문을 통해 내 경험을 구조화고 직무 역량 키워드로 뽑아보세요!`}
        />
      </ModalHeader>
      <section className="flex justify-center items-center py-[40px] px-[30px] rounded-[24px] border border-primary-100 bg-primary-50 gap-[28px]">
        <div className="relative w-[389px] h-[246px]">
          <Image
            src={AnalyzeOnboarding}
            alt="analyze-onboarding"
            className="absolute top-[-16px] bottom-0 left-0 right-0"
          />
        </div>
        <div className="flex flex-col items-start gap-[12px]">
          <h1 className="subhead2 text-main">{nickname}님은 이런 점을 얻을 수 있어요!</h1>
          <div className="flex gap-[8px]">
            <SvgIconNumber1 />
            <h2 className="text-main b2">
              S(상황).T(문제/목표).A(행동).R(결과/배운점)에 따라&nbsp;
              <span className="text-main subhead4">직무경험을 기록</span>해요
            </h2>
          </div>
          <div className="flex gap-[8px]">
            <SvgIconNumber2 />
            <h2 className="text-main b2">
              작성한 경험내용에 맞는 <span className="text-main subhead4">AI 직무 역량 키워드</span>와&nbsp;
              <span className="text-main subhead4">자기소개서를 추천</span>받아요
            </h2>
          </div>
          <div className="flex gap-[8px]">
            <SvgIconNumber3 />
            <h2 className="text-main b2">
              직무역량 별로 <span className="text-main subhead4">경험을 아카이빙</span>해요
            </h2>
          </div>
          <div className="text-start">
            <p className="text-sub c1">*경험내용 작성 시 문항 당 100자 글자수 제한이 있습니다.</p>
            <p className="text-sub c1">
              *경험내용 작성이 끝나면 AI 직무역량 키워드와 AI 추천 자기소개서 를 받을 수 있어요.
            </p>
          </div>
        </div>
      </section>
      <ModalFooter>
        <ModalFooter.OneButton textContent="시작해볼게요" handleClick={onClickMainButton} />
      </ModalFooter>
    </Modal>
  );
};

export default OnboardingModal;
