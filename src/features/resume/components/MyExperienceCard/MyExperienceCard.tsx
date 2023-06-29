import { Divider, Flex } from '@chakra-ui/react';

import IconCards from '@/components/Icon/IconCards';
import { colors } from '@/styles/theme/foundations/colors';

import ExperienceCardDetail from './ExperienceCardDetail';
import ExperienceCardList from './ExperienceCardList';

const MyExperienceCard = () => {
  return (
    <section className="resume-section min-h-[976px] shadow-toast">
      <header className="flex items-center gap-[6px] pt-[28px] pl-[35px] pr-[37px]">
        <h2 className="flex gap-[6px] subhead1">
          <IconCards />
          <span>내 경험카드</span>
        </h2>
        <p className="c1 text-sub">직무역량별 경험카드로 기억을 되새긴 후 자기소개서를 작성해봐요.</p>
        {/* <FilterChipList /> */}
      </header>
      <Divider borderColor={colors.gray[200]} />
      <Flex>
        <ExperienceCardList />
        <ExperienceCardDetail />
      </Flex>
    </section>
  );
};

export default MyExperienceCard;
