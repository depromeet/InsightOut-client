import { useMutation, UseMutationOptions, useQueryClient } from '@tanstack/react-query';
import { AxiosError, AxiosResponse } from 'axios';

import { EXPERIENCE_API } from '@/apis/experience/experience';
import { ExperienceParams } from '@/apis/experience/types/experience';
import { EXPERIENCE_KEY } from '@/shared/constants/querykeys';

export const useDeleteExperience = (
  experienceId: ExperienceParams['delete']['experienceId'],
  options?: UseMutationOptions<AxiosResponse, AxiosError>
) => {
  const queryClient = useQueryClient();
  return useMutation(() => EXPERIENCE_API.delete({ experienceId }), {
    ...options,
    onSuccess: () => {
      // FIXME: useGetExperiences 사용할 때 params 추가하시면 여기도 추가해주셔야합니다.
      queryClient.invalidateQueries(EXPERIENCE_KEY.list([{}]));
    },
  });
};
