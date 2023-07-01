import { Dispatch, SetStateAction } from 'react';

import { Grid, GridItem } from '@chakra-ui/react';

import SvgIconAdvertising from '@/components/Icon/jobCategories/IconAdvertising';
import SvgIconBio from '@/components/Icon/jobCategories/IconBio';
import SvgIconConstruction from '@/components/Icon/jobCategories/IconConstruction';
import SvgIconCustomerService from '@/components/Icon/jobCategories/IconCustomerService';
import SvgIconDesign from '@/components/Icon/jobCategories/IconDesign';
import SvgIconDevelopment from '@/components/Icon/jobCategories/IconDevelopment';
import SvgIconEducation from '@/components/Icon/jobCategories/IconEducation';
import SvgIconEngineering from '@/components/Icon/jobCategories/IconEngineering';
import SvgIconFinance from '@/components/Icon/jobCategories/IconFinance';
import SvgIconGameProduction from '@/components/Icon/jobCategories/IconGameProduction';
import SvgIconHumanResource from '@/components/Icon/jobCategories/IconHumanResource';
import SvgIconLaw from '@/components/Icon/jobCategories/IconLaw';
import SvgIconLogistics from '@/components/Icon/jobCategories/IconLogistics';
import SvgIconManagement from '@/components/Icon/jobCategories/IconManagement';
import SvgIconManufacturing from '@/components/Icon/jobCategories/IconManufacturing';
import SvgIconMarketing from '@/components/Icon/jobCategories/IconMarketing';
import SvgIconMedia from '@/components/Icon/jobCategories/IconMedia';
import SvgIconMedical from '@/components/Icon/jobCategories/IconMedical';
import SvgIconPublicWelfare from '@/components/Icon/jobCategories/IconPublicWelfare';
import SvgIconRetail from '@/components/Icon/jobCategories/IconRetail';
import SvgIconSales from '@/components/Icon/jobCategories/IconSales';
import SvgIconTrade from '@/components/Icon/jobCategories/IconTrade';
import ModalFooter from '@/components/Modal/ModalFooter';
import ModalHeader from '@/components/Modal/ModalHeader';
import emptyFunction from '@/shared/utils/emptyFunction';

import CategoryCard from '../CategoryCard/CategoryCard';

type CategoriesContentsProps = {
  nickname: string;
  selectedCategory: string;
  onClickGoBack: () => void;
  onClickCategory: Dispatch<SetStateAction<string>>;
};

const JOB_CATEGORIES = [
  { title: '개발', icon: <SvgIconDevelopment /> },
  { title: '경영', icon: <SvgIconManagement /> },
  { title: '마케팅', icon: <SvgIconMarketing /> },
  { title: '광고', icon: <SvgIconAdvertising /> },
  { title: '디자인', icon: <SvgIconDesign /> },
  { title: '영업', icon: <SvgIconSales /> },
  { title: '고객 서비스', icon: <SvgIconCustomerService /> },
  { title: '리테일', icon: <SvgIconRetail /> },
  { title: '게임제작', icon: <SvgIconGameProduction /> },
  { title: '미디어', icon: <SvgIconMedia /> },
  { title: '인사', icon: <SvgIconHumanResource /> },
  { title: '엔지니어링 & 설계', icon: <SvgIconEngineering /> },
  { title: '금융', icon: <SvgIconFinance /> },
  { title: '제조 & 생산', icon: <SvgIconManufacturing /> },
  { title: '의료', icon: <SvgIconMedical /> },
  { title: '바이오', icon: <SvgIconBio /> },
  { title: '물류', icon: <SvgIconLogistics /> },
  { title: '무역', icon: <SvgIconTrade /> },
  { title: '교육', icon: <SvgIconEducation /> },
  { title: '법률', icon: <SvgIconLaw /> },
  { title: '건설 & 토목', icon: <SvgIconConstruction /> },
  { title: '공공 & 복지', icon: <SvgIconPublicWelfare /> },
] as const;

const CategoriesContents = ({
  nickname,
  selectedCategory,
  onClickGoBack,
  onClickCategory,
}: CategoriesContentsProps) => {
  return (
    <>
      <ModalHeader>
        <ModalHeader.Title
          title={`${nickname}님은 어떤 분야를 준비 중인가요?`}
          subTitle={'1개의 지원 직무 분야를 골라주세요, 선택한 직무는 마이페이지에서 변경할 수 있어요'}
        />
      </ModalHeader>
      <Grid templateColumns={'repeat(4, 1fr)'} gap={13}>
        {JOB_CATEGORIES.map(({ title, icon }) => (
          <GridItem key={title}>
            <CategoryCard
              title={title}
              icon={icon}
              isSelected={title === selectedCategory}
              onClick={() => onClickCategory(title)}
            />
          </GridItem>
        ))}
      </Grid>
      <ModalFooter>
        <ModalFooter.TwoButton
          leftTextContent="이전으로"
          handleLeftClick={onClickGoBack}
          rightTextContent="선택완료"
          handleRightClick={emptyFunction}
        />
      </ModalFooter>
    </>
  );
};

export default CategoriesContents;
