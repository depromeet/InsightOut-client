import { HTTP_RESPONSE_ERROR_DATA, HTTP_STATUS_CODE } from '../constants/http';

/**
 * Access Token이 만료되었는지 여부를 판단
 */
export const isAccessTokenExpired = (statusCode: number, title: string, message: string) => {
  const { TITLE, MESSAGE } = HTTP_RESPONSE_ERROR_DATA.ACCESS_TOKEN_EXPIRED;
  return statusCode === HTTP_STATUS_CODE.UNAUTHORIZED && title === TITLE && message === MESSAGE;
};

/**
 * Refresh Token이 만료되었는지 여부를 판단
 */
export const isRefreshTokenExpired = (statusCode: number, title: string, message: string) => {
  const { TITLE, MESSAGE } = HTTP_RESPONSE_ERROR_DATA.REFRESH_TOKEN_EXPIRED;
  return statusCode === HTTP_STATUS_CODE.UNAUTHORIZED && title === TITLE && message === MESSAGE;
};

/**
 * Token이 존재하지 않는지 여부를 판단
 */
export const isTokenNotExist = (statusCode: number, title: string, message: string) => {
  const { TITLE, MESSAGE } = HTTP_RESPONSE_ERROR_DATA.TOKEN_NOT_EXIST;
  return statusCode === HTTP_STATUS_CODE.UNAUTHORIZED && title === TITLE && message === MESSAGE;
};
