import { useMutation, UseMutationOptions, useQueryClient } from '@tanstack/react-query';
import { AxiosError, AxiosResponse } from 'axios';
import { useRouter } from 'next/navigation';

import questionApi from '@/apis/resume/question';
import { QuestionParams, QuestionResponse } from '@/apis/resume/types/question';
import { ResumeData } from '@/features/resume/types/resume';
import { QUESTION_KEY, RESUME_KEY } from '@/shared/constants/querykeys';

export const useCreateQuestion = (
  options?: UseMutationOptions<QuestionResponse['post'], AxiosError, QuestionParams['post']['payload']['resumeId']>
) => {
  const queryClient = useQueryClient();

  return useMutation((resumeId) => questionApi.post({ payload: { resumeId } }), {
    ...options,
    onSuccess: (data, variables, context) => {
      queryClient.invalidateQueries({ queryKey: RESUME_KEY.lists() });
      options?.onSuccess?.(data, variables, context);
    },
  });
};

export const useUpdateQuestion = (
  questionId: QuestionParams['patch']['questionId'],
  options?: UseMutationOptions<AxiosResponse, AxiosError, QuestionParams['patch']['payload']>
) => {
  const queryClient = useQueryClient();

  return useMutation((payload) => questionApi.patch({ questionId, payload }), {
    ...options,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: RESUME_KEY.lists() });
      queryClient.invalidateQueries({ queryKey: QUESTION_KEY.detail([{ questionId }]) });
    },
  });
};

export const useDeleteQuestion = (
  questionId: QuestionParams['delete']['questionId'],
  options?: UseMutationOptions<AxiosResponse, AxiosError, QuestionParams['delete']['questionId']>
) => {
  const queryClient = useQueryClient();
  const router = useRouter();

  return useMutation(() => questionApi.delete({ questionId }), {
    ...options,
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: RESUME_KEY.lists() });

      const resumeList = queryClient.getQueryData<ResumeData[]>(RESUME_KEY.lists());
      if (resumeList) {
        const firstQuestionId = resumeList?.filter(({ questions }) => questions.length)[0]?.questions[0].id;

        router.push(`/resumes/${firstQuestionId}`);
      }
    },
  });
};
