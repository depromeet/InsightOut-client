import Image from 'next/image';
import cardImage from '../../../../public/images/card1.png';
import Badge from '@/components/Badge/Badge';
import ActionList from '@/components/ActionList/ActionList';
import IconMoreVertical from '@/components/Icon/IconMoreVertical';
import Tag from '@/components/Tag/Tag';

const ExperienceCard = () => {
  return (
    <section className="w-[389px] p-[24px] border rounded-[16px] hover:shadow-S4">
      <div className="relative w-[341px] h-[345px] bg-black rounded-[16px]">
        {/* 카드 이미지 */}
        <div className="w-[341px] h-[345px] flex items-center justify-center">
          {/* TODO: 특정 keyword에 맞는 사진 return 하는 함수 */}
          <Image src={cardImage} alt="경험카드" width={250} height={250} />
        </div>
        {/* 상태: experienceStatus */}
        <Badge variant="gray100-outline" size="S" className="absolute top-[16px] left-[16px]">
          작성중
        </Badge>
        {/* 액션버튼 */}
        <ActionList>
          <ActionList.Button className="absolute top-[16px] right-[16px]">
            <IconMoreVertical />
          </ActionList.Button>
          <ActionList.ItemWrapper>
            <ActionList.Item>수정하기</ActionList.Item>
            <ActionList.Item onClick={() => console.log('삭제 완')}>삭제하기</ActionList.Item>
          </ActionList.ItemWrapper>
        </ActionList>
        {/* 카드 키워드 */}
        <div className="flex flex-row gap-[12px] absolute bottom-[16px] left-[16px]">
          <Tag variant="gray800" size="M">
            협동력
          </Tag>
          <Tag variant="gray800" size="M">
            상상력
          </Tag>
        </div>
      </div>
      <div className="mt-[24px] flex flex-col">
        <span className="b1 mb-[2px]">2023.04 - 2023.08</span>
        <h5 className="h5 mb-[8px]">일이삼사오육칠팔구십일이삼사</h5>
        <p className="b2">
          텍스트를입력해주세요텍스트를입력해주세요텍스트를입력해주세요텍스트를입력해주세요텍스트를입력해주세...
        </p>
      </div>
      <div className="border-t-[1px] border-gray-200 my-[16px]"></div>
      <div>
        <div>
          <span className="mb-4 subhead4">직무영략 키워드</span>
          <div className="grid grid-cols-2 grid-rows-2 gap-[4px] mb-[10px]">
            <Tag variant="primary50-outline" size="M">
              일이삼사오육칠팔구십
            </Tag>
            <Tag variant="primary50-outline" size="M">
              일이삼사오육칠팔구십
            </Tag>
            <Tag variant="primary50-outline" size="M">
              일이삼사오육칠팔구십
            </Tag>
          </div>
        </div>
        <div>
          <span className="mb-4 subhead4">AI추천 키워드</span>
          <div className="grid grid-cols-2 grid-rows-1 gap-[4px] mb-[10px]">
            <Tag variant="secondary50-outline" size="M">
              일이삼사오육칠팔구십
            </Tag>
            <Tag variant="secondary50-outline" size="M">
              일이삼사오육칠팔구십
            </Tag>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceCard;
