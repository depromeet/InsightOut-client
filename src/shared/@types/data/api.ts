import { AxiosError } from 'axios';

import { HTTP_STATUS_CODE } from '@/shared/constants/http';

type HttpStatusCode = (typeof HTTP_STATUS_CODE)[keyof typeof HTTP_STATUS_CODE];

interface InsightOutResponseData<T> {
  statusCode: HttpStatusCode;
  success: boolean;
  data: T;
}

interface InsightOutResponseErrorData {
  data: {
    title: string;
    message: string;
  };
}

export type InsightOutResponse<T> = InsightOutResponseData<T>;
export type InsightOutResponseError = AxiosError<InsightOutResponseErrorData>;
