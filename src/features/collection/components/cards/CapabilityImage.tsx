import Image from 'next/image';

import common from '../../../../../public/images/capabilites/common.png';
import { CAPABILITYES_IMAGE } from '../../constants';

type Props = {
  keyword: string;
  width: number;
  heigth: number;
};

const ExperienceImage = ({ width, heigth, keyword }: Props) => {
  const image = CAPABILITYES_IMAGE[keyword] || common;
  return <Image src={image} alt="keyword" width={width} height={heigth} />;
};

export default ExperienceImage;
