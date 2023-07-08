import React, { HTMLAttributes, useEffect, useRef, useState } from 'react';
import { useFormContext, useWatch } from 'react-hook-form';

import cn from 'classnames';
import { usePathname } from 'next/navigation';

import Badge from '@/components/Badge/Badge';
import { useUpdateEffect } from '@/hooks/useUpdateEffect';

import { STEP, STEPS } from '../constants';
import { ExperienceFormValues, WriteStatusType } from '../types';
import styles from './StepMenuItem.module.scss';

const 경험정보질문갯수 = 3;
const 경험내용질문갯수 = 4;

interface StepMenuItemProps extends Pick<HTMLAttributes<HTMLLIElement>, 'className'> {
  title: (typeof STEPS)[number]['title'];
  status: WriteStatusType;
}

const StepMenuItem = ({ title, status, className }: StepMenuItemProps) => {
  const pathname = usePathname();
  const currentStepIndex = (STEPS.find((v) => v.route === pathname)?.id ?? 1) - 1;

  const classNames = cn(styles.root, styles[status], className);
  const [경험정보count, set경험정보count] = useState(0);
  const [경험내용count, set경험내용count] = useState(0);

  const onceFlag = useRef(false);
  const {
    formState: { dirtyFields },
    control,
    setValue,
    getValues,
  } = useFormContext<ExperienceFormValues>();

  const [startYYYY, startMM, endYYYY, endMM] = useWatch({
    control,
    name: ['startYYYY', 'startMM', 'endYYYY', 'endMM'],
  });

  const getVariant = () => {
    switch (status) {
      case '미작성':
        return 'gray100-outline';
      case '작성중':
        return 'primary200-outline';
      case '작성완료':
        return 'primary50-outline';
      default:
        return 'gray100-outline';
    }
  };

  const getTitle = () => {
    if (title === '경험정보') {
      return `${title}(${경험정보count}/${경험정보질문갯수})`;
    }
    if (title === '경험내용') {
      return `${title}(${경험내용count}/${경험내용질문갯수})`;
    }

    return title;
  };

  useEffect(() => {
    const writeStatus = getValues('writeStatus') as WriteStatusType[];
    const copyWriteStatus = [...writeStatus];

    if (currentStepIndex === STEP.experience - 1)
      if (경험정보count === 경험정보질문갯수) {
        copyWriteStatus[currentStepIndex] = '작성완료';
        setValue('writeStatus', copyWriteStatus);
      } else if (0 < 경험정보count && 경험정보count < 경험정보질문갯수) {
        copyWriteStatus[currentStepIndex] = '작성중';
        setValue('writeStatus', copyWriteStatus);
      }

    if (currentStepIndex === STEP.information - 1)
      if (경험내용count === 경험내용질문갯수) {
        copyWriteStatus[currentStepIndex] = '작성완료';
        setValue('writeStatus', copyWriteStatus);
      } else if (0 < 경험내용count && 경험내용count < 경험내용질문갯수) {
        copyWriteStatus[currentStepIndex] = '작성중';
        setValue('writeStatus', copyWriteStatus);
      }
  }, [경험정보count, 경험내용count, currentStepIndex, setValue, getValues]);

  // TODO: 리팩토링 하기
  /**
   * @note 경험정보, 경험내용 질문 작성 여부 체크하는 로직
   */
  useUpdateEffect(() => {
    if (title === '경험정보') {
      const { title } = dirtyFields;
      const experience = title && startYYYY && startMM && endYYYY && endMM;
      if (!onceFlag.current && experience) {
        set경험정보count((prev) => prev + 1);
        onceFlag.current = true;
      } else if (onceFlag.current && !experience) {
        set경험정보count((prev) => prev - 1);
        onceFlag.current = false;
      }
    }
  }, [dirtyFields.title, startYYYY, startMM, endYYYY, endMM]);

  useUpdateEffect(() => {
    if (title === '경험정보') {
      const { experienceRole } = dirtyFields;
      set경험정보count((prev) => (experienceRole ? prev + 1 : prev - 1));
    }
  }, [dirtyFields.experienceRole]);

  useUpdateEffect(() => {
    if (title === '경험정보') {
      const { motivation } = dirtyFields;
      set경험정보count((prev) => (motivation ? prev + 1 : prev - 1));
    }
  }, [dirtyFields.motivation]);

  useUpdateEffect(() => {
    if (title === '경험내용') {
      const { situation } = dirtyFields;
      set경험내용count((prev) => (situation ? prev + 1 : prev - 1));
    }
  }, [dirtyFields.situation]);

  useUpdateEffect(() => {
    if (title === '경험내용') {
      const { task } = dirtyFields;
      set경험내용count((prev) => (task ? prev + 1 : prev - 1));
    }
  }, [dirtyFields.task]);

  useUpdateEffect(() => {
    if (title === '경험내용') {
      const { action } = dirtyFields;
      set경험내용count((prev) => (action ? prev + 1 : prev - 1));
    }
  }, [dirtyFields.action]);

  useUpdateEffect(() => {
    if (title === '경험내용') {
      const { result } = dirtyFields;
      set경험내용count((prev) => (result ? prev + 1 : prev - 1));
    }
  }, [dirtyFields.result]);

  return (
    <li className={classNames}>
      <span className="b1">{getTitle()}</span>
      <Badge size="S" variant={getVariant()}>
        {status}
      </Badge>
    </li>
  );
};

export default StepMenuItem;
