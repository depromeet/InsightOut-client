'use client';

import React, { KeyboardEvent } from 'react';
import { useFormContext, useWatch } from 'react-hook-form';

import Button from '@/components/Button/Button';
import TextAreaField from '@/components/Input/TextAreaField/TextAreaField';
import QuestionCard from '@/components/QuestionCard/QuestionCard';
import Tag from '@/components/Tag/Tag';
import KeywordContainer from '@/feature/analyze/keyword/KeywordContainer';
import { useCreateKeyword, useUpdateKeyword } from '@/hooks/reactQuery/keyword/mutation';
import { useGetKeywordList } from '@/hooks/reactQuery/keyword/query';
import useInput from '@/hooks/useInput';
import { exceptEnter } from '@/shared/utils/exceptEnter';

import { ExperienceFormValues, KeywordEntriesType } from '../types';

const deDuplicatedTwoDimensionalArray = (arr: KeywordEntriesType) => Object.entries(Object.fromEntries(arr));

// TODO: 경험 분해 키워드 임시 저장 API (/experience/capability) 로 요청 보내기, 요청body: Object.fromEntries(keywordList.filter(([, isSelected]) => keyword[1] === true))

const KeywordPage = () => {
  const [text, onChangeText, setText] = useInput('');
  const { setValue, control } = useFormContext<ExperienceFormValues>();

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

  const { mutateAsync: createKeyword } = useCreateKeyword();
  const { mutateAsync: saveKeyword } = useUpdateKeyword({ experienceId });

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
    const deDuplicatedKeywordList = deDuplicatedTwoDimensionalArray([...keywordList, [text, false]]);
    // TODO: 중복된 키워드면 토스트 띄워주기
    setValue('keywords', deDuplicatedKeywordList);
    if (deDuplicatedKeywordList.length !== keywordList.length) {
      await saveKeyword({ keywords: Object.fromEntries(keywordList.filter(([, isSelected]) => isSelected === true)) });
      await createKeyword({ keyword: text });
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
      </>
    </QuestionCard>
  );
};

export default KeywordPage;
