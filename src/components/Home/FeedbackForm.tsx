'use client';

import { useRef } from 'react';

import { useToast } from '@chakra-ui/react';

import userApi from '@/apis/user/user';
import Button from '@/components/Button/Button';

import TextField from '../Input/TextField/TextField';

const FeedbackForm = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  const toast = useToast();

  const handleSubmitFeedback = async () => {
    if (!inputRef.current || !inputRef.current.value) return;
    const { value } = inputRef.current;

    if (value.length > 300) {
      toast({
        description: '피드백의 제한 길이는 300자 입니다.',
        status: 'error',
        duration: 2000,
        isClosable: true,
      });

      return;
    }

    await userApi.postFeedback({ contents: value });
  };

  return (
    <form
      className="flex items-center justify-center gap-[14px]"
      onSubmit={(e) => {
        e.preventDefault();
        handleSubmitFeedback();
      }}>
      <TextField
        ref={inputRef}
        className="w-[552px] p-[16px] bg-transparent focus:text-white"
        type="text"
        placeholder="서비스를 사용하면서 느낀 생각, 느낌을 자유롭게 적어주세요!"
      />
      <Button type="submit" size="XL" variant="primary">
        피드백 보내기
      </Button>
    </form>
  );
};

export default FeedbackForm;
