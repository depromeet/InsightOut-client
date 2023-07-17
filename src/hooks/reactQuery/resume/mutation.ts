import { useMutation, UseMutationOptions, useQueryClient } from '@tanstack/react-query';
import { AxiosError, AxiosResponse } from 'axios';
import { useRouter } from 'next/navigation';

import resumeApi from '@/apis/resume/resume';
import { ResumeParams, ResumeResponse } from '@/apis/resume/types/resume';
import { ResumeData } from '@/features/resume/types/resume';
import { RESUME_KEY } from '@/shared/constants/querykeys';

export const useCreateResume = (options?: UseMutationOptions<ResumeResponse['post'], AxiosError>) => {
  const queryClient = useQueryClient();

  return useMutation(resumeApi.post, {
    ...options,
    onSuccess: (data, variables, context) => {
      queryClient.invalidateQueries({ queryKey: RESUME_KEY.lists() });
      options?.onSuccess?.(data, variables, context);
    },
  });
};

export const useUpdateResumeTitle = (
  resumeId: ResumeParams['patch']['resumeId'],
  options?: UseMutationOptions<AxiosResponse, AxiosError, ResumeParams['patch']['payload']['title']>
) => {
  const queryClient = useQueryClient();

  return useMutation((title) => resumeApi.patch({ resumeId, payload: { title } }), {
    ...options,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: RESUME_KEY.lists() });
    },
  });
};

export const useDeleteResume = (
  resumeId: ResumeParams['delete']['resumeId'],
  options?: UseMutationOptions<AxiosResponse, AxiosError, ResumeParams['delete']>
) => {
  const queryClient = useQueryClient();
  const router = useRouter();

  return useMutation(() => resumeApi.delete({ resumeId }), {
    ...options,
    onSuccess: async () => {
      const resumeList = queryClient.getQueryData<ResumeData[]>(RESUME_KEY.lists());
      if (resumeList) {
        const nextResume = resumeList.find(({ id, questions }) => id !== resumeId && questions.length !== 0);
        const nextQuestionId = nextResume?.questions[0].id;

        router.push(`/resumes/${nextQuestionId}`);
      }

      await queryClient.invalidateQueries({ queryKey: RESUME_KEY.lists() });
    },
  });
};
