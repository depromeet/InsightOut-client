'use client';

import React, { KeyboardEvent } from 'react';
import { useFormContext, useWatch } from 'react-hook-form';

import { useDisclosure } from '@chakra-ui/react';
import { useQueryClient } from '@tanstack/react-query';

import Button from '@/components/Button/Button';
import TextAreaField from '@/components/Input/TextAreaField/TextAreaField';
import QuestionCard from '@/components/QuestionCard/QuestionCard';
import Tag from '@/components/Tag/Tag';
import KeywordContainer from '@/features/analyze/keyword/KeywordContainer';
import { useCreateKeyword } from '@/hooks/reactQuery/keyword/mutation';
import { useGetKeywordList } from '@/hooks/reactQuery/keyword/query';
import useInput from '@/hooks/useInput';
import { KEYWORD_KEY } from '@/shared/constants/querykeys';
import { exceptEnter } from '@/shared/utils/exceptEnter';

import BaseDialog from '../modal/BaseDialog';
import { ExperienceFormValues, Keyword, KeywordEntriesType } from '../types';

const deDuplicatedTwoDimensionalArray = (arr: KeywordEntriesType) => Object.entries(Object.fromEntries(arr));
const appendNewKeyword = (keywordList: Keyword, keyword: string) => Object.assign(keywordList, { [keyword]: false });

const KeywordPage = () => {
  const [text, onChangeText, setText] = useInput('');
  const { setValue, control } = useFormContext<ExperienceFormValues>();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [experienceId, keywordList] = useWatch({
    name: ['experienceId', 'keywords'],
    control,
  });

  useGetKeywordList(
    { experienceId },
    {
      onSuccess: (data) => {
        setValue('keywords', Object.entries(data));
      },
    }
  );
  const queryClient = useQueryClient();
  const { mutate: createKeyword } = useCreateKeyword({
    onSuccess: (_, variables) => {
      queryClient.setQueryData(
        KEYWORD_KEY.list([{ experienceId }]),
        appendNewKeyword(Object.fromEntries(keywordList), variables.keyword)
      );
    },
  });

  const getKeywordList = (newKeyword: string) => {
    const selectedKeywordList = keywordList.filter(([, isSelected]) => isSelected === true);
    const selectedKeywordIndex = keywordList.findIndex(([prevKeyword]) => prevKeyword === newKeyword);
    const toggleKeyword = selectedKeywordList.includes(keywordList[selectedKeywordIndex]);
    const newKeywordList = keywordList.map(([prevKeyword, prevSelected]) =>
      prevKeyword === newKeyword ? [prevKeyword, !prevSelected] : [prevKeyword, prevSelected]
    ) as KeywordEntriesType;

    if (selectedKeywordList.length === 4 && toggleKeyword) return newKeywordList;
    if (selectedKeywordList.length >= 4) return keywordList;
    return newKeywordList;
  };

  const handleClickKeyword = (newKeyword: string) => () => {
    setValue('keywords', getKeywordList(newKeyword));
  };

  const addKeywordAndInitializeTextField = async () => {
    if (!text.trim()) return;

    const addKeywordList = deDuplicatedTwoDimensionalArray([...keywordList, [text, false]]);
    const isDuplicated = addKeywordList.length === keywordList.length;
    if (isDuplicated) {
      onOpen();
    } else {
      setValue('keywords', addKeywordList);
      createKeyword({ keyword: text });
    }
    setText('');
  };

  const handleEnterKeyDown = (e: KeyboardEvent<HTMLElement>) => {
    if (e.key === 'Enter') addKeywordAndInitializeTextField();
  };

  return (
    <QuestionCard title="경험으로 나타내고 싶은 직무역량 키워드를 선택하세요" subTitle="최대 4개까지 선택할 수 있어요">
      <>
        <KeywordContainer>
          {keywordList.map((data) => {
            const [keyword, isSelected] = data;
            return (
              <Tag
                className="hover:cursor-pointer"
                variant={isSelected ? 'primary500' : 'gray100'}
                size="L"
                key={keyword}
                onClick={handleClickKeyword(keyword)}>
                {keyword}
              </Tag>
            );
          })}
        </KeywordContainer>
        <div className="flex items-start justify-center" onKeyPress={handleEnterKeyDown}>
          <div className="w-[356px] mr-[6px] [&_p]:mt-0">
            <TextAreaField
              className="px-[16px] py-[10px]"
              placeholder="키워드 직접 입력하기(ex. 문제해결역량)"
              maxLength={10}
              rows={1}
              onKeyPress={exceptEnter}
              value={text}
              onChange={onChangeText}
            />
          </div>
          <Button
            type="button"
            variant="gray200"
            size="L"
            disabled={!text.trim()}
            onClick={addKeywordAndInitializeTextField}>
            추가하기
          </Button>
        </div>
        <BaseDialog
          size="3xl"
          isOpen={isOpen}
          onClose={onClose}
          title={`중복된 키워드는 추가할 수 없어요`}
          textContent="확인했어요"
        />
      </>
    </QuestionCard>
  );
};

export default KeywordPage;
