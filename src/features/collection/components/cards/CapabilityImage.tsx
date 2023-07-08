import Image from 'next/image';

import { ExperienceStatus } from '@/feature/analyze/types';

import common from '../../../../../public/images/capabilites/common.png';
import inprogress from '../../../../../public/images/capabilites/inprogress.png';
import { CAPABILITYES_IMAGE } from '../../constants';

type Props = {
  keyword: string;
  width: number;
  heigth: number;
  experienceStatus: ExperienceStatus;
};

const ExperienceImage = ({ width, heigth, keyword, experienceStatus }: Props) => {
  const image = experienceStatus === 'INPROGRESS' ? inprogress : CAPABILITYES_IMAGE[keyword] || common;
  return <Image src={image} alt="keyword" width={width} height={heigth} />;
};

export default ExperienceImage;
