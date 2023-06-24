import Lottie from '@/components/Lottie/Lottie';
import ModalFooter from '@/components/Modal/ModalFooter';
import ModalHeader from '@/components/Modal/ModalHeader';

type WelcomeContents = {
  onClickButton: () => void;
};

const WelcomeContents = ({ onClickButton }: WelcomeContents) => {
  return (
    <>
      <ModalHeader className="whitespace-pre-line">
        <ModalHeader.Title title={`[랜덤닉네임]님!\n 인사이트 아웃에 오신걸 환영해요`} />
      </ModalHeader>
      <div className="w-[200px] h-[200px]">
        <Lottie src="/lotties/lumos-hi.json" />
      </div>
      <ModalFooter.OneButton textContent="만나서 반가워요" handleClick={onClickButton} />
    </>
  );
};

export default WelcomeContents;
