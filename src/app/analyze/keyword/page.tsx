'use client';

import React, { KeyboardEvent, useState } from 'react';
import QuestionCard from '@/components/QuestionCard/QuestionCard';
import Tag from '@/components/Tag/Tag';
import KeywordContainer from '@/feature/analyze/keyword/KeywordContainer';
import useInput from '@/hooks/useInput';
import TextAreaField from '@/components/Input/TextAreaField/TextAreaField';
import { exceptEnter } from '@/shared/utils/exceptEnter';
import Button from '@/components/Button/Button';
import type { Keyword } from '@/feature/analyze/types';

// FIXME: mock data
const data = {
  고객지향성: false,
  갈등관리: false,
  커뮤니케이션: false,
  팀워크: false,
  리더십: false,
  도전정신: true,
  목표달성력: false,
  추진력: true,
  의사결정능력: false,
  체계적사고: false,
  혁신사고력: true,
  전략적사고력: false,
  분석능력: false,
  책임감: false,
  기획력: false,
  문제해결력: false,
  계획력: false,
  자기계발: false,
  설득력: false,
  창의력: false,
  주도성: false,
  수리감각: false,
  정보수집능력: false,
};
const entriesData = Object.entries(data);

const deDuplicatedKeywordList = (arr: Keyword) => Object.entries(Object.fromEntries(arr));

// TODO: 경험 분해 키워드 가져오기 API (/experience/capability/{experienceId}) 요청으로 키워드 불러오기
// TODO: 경험 분해 키워드 임시 저장 API (/experience/capability) 로 요청 보내기, 요청body: Object.fromEntries(keywordList.filter((keyword) => keyword[1] === true))
// MINOR_TODO: input checkbox로 리팩토링? (Tag 컴포넌트 수정)

const Keyword = () => {
  const [text, onChangeText, setText] = useInput('');
  const [keywordList, setKeywordList] = useState(entriesData);

  const handleClickKeyword = (newKeyword: string) => () => {
    setKeywordList((prev) => {
      const selectedKeywordList = prev.filter(([, isSelected]) => isSelected === true);
      const selectedKeywordIndex = keywordList.findIndex(([prevKeyword]) => prevKeyword === newKeyword);
      const toggleKeyword = selectedKeywordList.includes(keywordList[selectedKeywordIndex]);
      const newKeywordList = prev.map(([prevKeyword, prevSelected]) =>
        prevKeyword === newKeyword ? [prevKeyword, !prevSelected] : [prevKeyword, prevSelected]
      ) as Keyword;

      if (selectedKeywordList.length === 4 && toggleKeyword) return newKeywordList;
      if (selectedKeywordList.length >= 4) return prev;
      return newKeywordList;
    });
  };

  const addKeywordAndInitializeTextField = () => {
    if (!text.trim()) return;
    // TODO: 중복된 키워드면 토스트 띄워주기
    setKeywordList((prev) => deDuplicatedKeywordList([...prev, [text, false]]));
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

export default Keyword;
