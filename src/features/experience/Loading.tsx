import Lottie from '@/components/Lottie/Lottie';
import { useUserNickname } from '@/shared/store/user';

const Loading = () => {
  const nickname = useUserNickname();

  return (
    <section className="w-[709px] h-[581px] rounded-[24px] bg-white p-[40px] flex justify-center text-center">
      <div className="w-full">
        <div className="mx-auto w-[400px] h-[400px] mb-[24px] flex justify-center">
          <Lottie src="/lotties/lumos-loading.json" />
        </div>
        <p className="text-main h6">여기까지 오느라 수고했어요 :)</p>
        <p className="text-main h6">[{nickname}]님의 경험카드가 만들어지고 있어요</p>
      </div>
    </section>
  );
};

export default Loading;
