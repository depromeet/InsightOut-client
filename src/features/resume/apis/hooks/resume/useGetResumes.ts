import { useQuery } from '@tanstack/react-query';

import { QUERY_KEY } from '@/shared/constants/queryKey';

import resumeApi from '../../resume';
import { ResumeResponse } from '../../types/resume';

const useGetResumes = () => {
  return useQuery<ResumeResponse['get']>({
    queryKey: [QUERY_KEY.resumes],
    queryFn: async () => {
      const {
        data: { data },
      } = await resumeApi.get();
      return data;
    },
  });
};

export default useGetResumes;
