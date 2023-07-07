import instance from '@/apis';

import { TitleResponse } from './types/title';

const API_URL = '/resumes/title';

const resumeTitleApi = {
  get: async () => await instance.get<TitleResponse['get'], TitleResponse['get']>(API_URL),
};

export default resumeTitleApi;
