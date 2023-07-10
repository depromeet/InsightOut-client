import Image from 'next/image';
import common from 'public/images/capabilites/common.png';
import inprogress from 'public/images/capabilites/inprogress.png';

import { ExperienceStatus } from '@/feature/analyze/types';

import { CAPABILITYES_IMAGE } from '../../constants';

type Props = {
  keyword: string;
  width: number;
  height: number;
  experienceStatus: ExperienceStatus;
};

const CapabilityImage = ({ width, height, keyword, experienceStatus }: Props) => {
  const image = experienceStatus === 'INPROGRESS' ? inprogress : CAPABILITYES_IMAGE[keyword] || common;
  return <Image src={image} alt="keyword" width={width} height={height} />;
};

export default CapabilityImage;
