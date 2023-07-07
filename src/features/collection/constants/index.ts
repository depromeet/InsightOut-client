import { StaticImageData } from 'next/image';

import logical from '../../../../public/images/capabilites/logical.png';
import performance from '../../../../public/images/capabilites/performance.png';
import relationship from '../../../../public/images/capabilites/relationship.png';
import selfBased from '../../../../public/images/capabilites/self_based.png';

export const ANSWER_MAX_LENGTH = 2000;

type CapabilitiesImage = {
  [key: string]: StaticImageData;
};

export const CAPABILITYES_IMAGE: CapabilitiesImage = {
  고객지향성: relationship,
  갈등관리: relationship,
  커뮤니케이션: relationship,
  팀워크: relationship,
  리더십: performance,
  도전정신: performance,
  목표달성력: performance,
  추진력: performance,
  의사결정능력: performance,
  '체계적 사고': logical,
  혁신사고력: logical,
  '전략적 사고력': logical,
  분석능력: logical,
  책임감: selfBased,
  기획력: selfBased,
  문제해결력: selfBased,
  계획력: selfBased,
  자기계발: selfBased,
  설득력: selfBased,
  창의력: selfBased,
  주도성: selfBased,
  수리감각: selfBased,
  정보수집능력: selfBased,
} as const;
