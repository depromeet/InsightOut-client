import { WRITE_STATUS } from '../constants';

type ExperienceStatus = 'INPROGRESS' | 'DONE';

export type WriteStatusType = (typeof WRITE_STATUS)[number];
export type Keyword = Record<string, boolean>;
export type KeywordEntriesType = [string, boolean][];

export type CapabilitiesType = { id: number; keyword: string };

export interface ExperienceFormValues {
  /**
   * 경험 분해 키워드 가져올 때 필요한 id
   */
  experienceId: number;
  /**
   * 경험 제목 (/analyze/experience)
   */
  title: string;
  /**
   * 경험에서 내가 맡은 역할 (/analyze/experience)
   */
  experienceRole: string;
  /**
   * 경험을 하게 된 동기 (/analyze/experience)
   */
  motivation: string;
  /**
   * 경험 기간 시작 일자 (/analyze/experience)
   * startYYYY, startMM 합쳐서 제출할 땐 startDate: `${startYYYY}${startMM}` 로 보내기
   */
  startYYYY?: string;
  startMM?: string;
  startDate: string;
  /**
   * 경험 기간 종료 일자 (/analyze/experience)
   * endYYYY, endMM 합쳐서 제출할 땐 endDate: `${endYYYY}${endMM}` 로 보내기
   */
  endYYYY?: string;
  endMM?: string;
  endDate: string;
  /**
   * 키워드 리스트, 제출할 땐 Object.fromEntries()로 풀어서 객체형식으로 보내기
   */
  keywords: KeywordEntriesType;
  /**
   * 경험 내용(STAR) 중 S (/analyze/information)
   */
  situation: string;
  /**
   * 경험 내용(STAR) 중 T (/analyze/information)
   */
  task: string;
  /**
   * 경험 내용(STAR) 중 A (/analyze/information)
   */
  action: string;
  /**
   * 경험 내용(STAR) 중 R (/analyze/information)
   */
  result: string;
  /**
   * 경험 카드 작성 상태
   */
  experienceStatus: ExperienceStatus;
  /**
   * 각 스텝의 작성 상태 (제출하기 전에 해당 property 삭제하고 제출하기)
   */
  writeStatus?: WriteStatusType[];
  /**
   * Chat GPT 추천 키워드 api response
   */
  capabilities: CapabilitiesType[];
  /**
   * Chat GPT 자기소개서 생성 프롬프트 api response
   */
  resume: string;
}
