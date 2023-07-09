'use client';

import IconCards from '@/components/Icon/IconCards';
import ChipListNav from '@/features/collection/components/nav/ChipListNav';
import { Capability } from '@/features/collection/types';
import getAllCapability from '@/features/collection/utils/getAllCapabilityBadgeItem';
import { useGetExperienceCapabilities } from '@/hooks/reactQuery/experience/qeury';

import { useCapabilityKeyword, useExperienceActions } from '../../store';

const MyExperienceCardHeader = () => {
  const selectedCapabilitykeyword = useCapabilityKeyword();
  const { setCapabilityKeyword } = useExperienceActions();

  const { data: capabilities } = useGetExperienceCapabilities();

  if (!capabilities) return null;

  const allCapability = getAllCapability(capabilities ?? []);
  const capabilityList: Capability[] = [allCapability, ...(capabilities ?? [])];

  const handleChipClick = (item: Capability) => {
    setCapabilityKeyword(item.keyword);
  };

  return (
    <header className="flex flex-col pt-[28px] pl-[35px] pr-[37px]">
      <div className="flex items-center gap-[6px]">
        <h2 className="flex gap-[6px] subhead1">
          <IconCards />
          <span>내 경험카드</span>
        </h2>
        <p className="c1 text-sub">직무역량별 경험카드로 기억을 되새긴 후 자기소개서를 작성해봐요.</p>
      </div>
      <div className="w-[100%] relative after:content-[''] after:absolute after:top-0 after:right-0 after:w-[68px] after:h-[100%] after:bg-gradient-to-l after:from-[#FFF] after:to-[rgba(255, 255, 255, 0.00))]">
        <div className="overflow-x-scroll">
          <ChipListNav
            chipSize="S"
            items={capabilityList ?? []}
            selectedItem={selectedCapabilitykeyword}
            changeItem={handleChipClick}
          />
        </div>
      </div>
    </header>
  );
};

export default MyExperienceCardHeader;
