import instance from '@/apis';

import { CountResponse } from './types/count';

const API_URL = '/resumes/count';

const resumeCountApi = {
  get: async () => await instance.get<CountResponse['get'], CountResponse['get']>(API_URL),
};

export default resumeCountApi;
