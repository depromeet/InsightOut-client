import ModalFooter from '@/components/Modal/ModalFooter';
import ModalHeader from '@/components/Modal/ModalHeader';
import { ListItem, UnorderedList } from '@chakra-ui/react';

type StartNowContentsProps = {
  onClickLeftButton: () => void;
  onClickRightButton: () => void;
};

const StartNowContents = ({ onClickLeftButton, onClickRightButton }: StartNowContentsProps) => {
  return (
    <>
      <ModalHeader>
        <ModalHeader.Title
          title="인사이트 아웃에 오신 것을 환영해요"
          subTitle="ai 역량 키워드 추천부터 자소서까지 인사이트 아웃에서 새로운 나의 강점과 역량을 파악해봐요!"
        />
      </ModalHeader>
      <div className="flex flex-col items-start py-[20px] px-[30px] rounded-[16px] bg-gray-50 gap-[8px]">
        <p className="text-[#292929] text-[20px] font-bold leading-[28px]">사전 안내사항</p>
        <UnorderedList className="text-sub text-[14px] font-medium">
          <ListItem className="text-left">
            인사이트아웃 서비스를 이용하며 작성한 내용 및 데이터는 외부에 공유되지 않습니다.
          </ListItem>
          <ListItem className="text-left">
            인사이트아웃 서비스의 기능 중 하나인 AI 직무 역량 키워드 추천 기능은 Chat GPT 인공지능 기반으로 작동하게
            되며, 서비스를 이용하면서 문제가 되거나 문제가 될 수 있다고 판단한 결과물에 대해서는 즉시 인사이트아웃
            팀에게 공유해주시기 바랍니다. (insightout@google.com)
          </ListItem>
        </UnorderedList>
      </div>
      <ModalFooter>
        <ModalFooter.TwoButton
          leftTextContent="이전으로"
          handleLeftClick={onClickLeftButton}
          rightTextContent="지금 시작하기"
          handleRightClick={onClickRightButton}
        />
      </ModalFooter>
    </>
  );
};

export default StartNowContents;
