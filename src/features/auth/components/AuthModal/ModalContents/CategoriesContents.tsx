import { Dispatch, SetStateAction } from 'react';

import { Grid, GridItem } from '@chakra-ui/react';

import { JobCategories } from '@/apis/user/types/user';
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
import { Field } from '@/shared/constants/user';

import Category from '../Category/Category';

type CategoriesContentsProps = {
  nickname: string;
  selectedCategory: { title: string; field: Field };
  onClickLeftButton: () => void;
  onClickCategory: Dispatch<SetStateAction<{ title: string; field: Field }>>;
  onClickRightButton: () => void;
};

const JOB_CATEGORIES: JobCategories = [
  { title: '개발', icon: <SvgIconDevelopment />, field: Field['DEVELOPMENT'] },
  { title: '경영', icon: <SvgIconManagement />, field: Field['MANAGEMENT'] },
  { title: '마케팅', icon: <SvgIconMarketing />, field: Field['MARKETING'] },
  { title: '광고', icon: <SvgIconAdvertising />, field: Field['ADVERTISING'] },
  { title: '디자인', icon: <SvgIconDesign />, field: Field['DESIGN'] },
  { title: '영업', icon: <SvgIconSales />, field: Field['SALES'] },
  { title: '고객 서비스', icon: <SvgIconCustomerService />, field: Field['CUSTOMER_SERVICE'] },
  { title: '리테일', icon: <SvgIconRetail />, field: Field['RETAIL'] },
  { title: '게임제작', icon: <SvgIconGameProduction />, field: Field['GAME_PRODUCTION'] },
  { title: '미디어', icon: <SvgIconMedia />, field: Field['MEDIA'] },
  { title: '인사', icon: <SvgIconHumanResource />, field: Field['HUMAN_RESOURCE'] },
  { title: '엔지니어링 & 설계', icon: <SvgIconEngineering />, field: Field['ENGINEERING'] },
  { title: '금융', icon: <SvgIconFinance />, field: Field['FINANCE'] },
  { title: '제조 & 생산', icon: <SvgIconManufacturing />, field: Field['MANUFACTURING'] },
  { title: '의료', icon: <SvgIconMedical />, field: Field['MEDICAL'] },
  { title: '바이오', icon: <SvgIconBio />, field: Field['BIO'] },
  { title: '물류', icon: <SvgIconLogistics />, field: Field['LOGISTICS'] },
  { title: '무역', icon: <SvgIconTrade />, field: Field['TRADE'] },
  { title: '교육', icon: <SvgIconEducation />, field: Field['EDUCATION'] },
  { title: '법률', icon: <SvgIconLaw />, field: Field['LAW'] },
  { title: '건설 & 토목', icon: <SvgIconConstruction />, field: Field['CONSTRUCTION'] },
  { title: '공공 & 복지', icon: <SvgIconPublicWelfare />, field: Field['PUBLIC_WELFARE'] },
] as const;

const CategoriesContents = ({
  nickname,
  selectedCategory,
  onClickLeftButton,
  onClickCategory,
  onClickRightButton,
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
        {JOB_CATEGORIES.map(({ title, icon, field }) => (
          <GridItem key={title}>
            <Category
              title={title}
              icon={icon}
              isSelected={title === selectedCategory.title}
              onClick={() => onClickCategory({ title, field })}
            />
          </GridItem>
        ))}
      </Grid>
      <ModalFooter>
        <ModalFooter.TwoButton
          leftTextContent="이전으로"
          handleLeftClick={onClickLeftButton}
          rightTextContent="선택완료"
          handleRightClick={onClickRightButton}
        />
      </ModalFooter>
    </>
  );
};

export default CategoriesContents;
