import React, { HTMLAttributes, useCallback, useEffect, useRef, useState } from 'react';
import { useFormContext, useWatch } from 'react-hook-form';

import { usePrevious } from '@chakra-ui/react';
import cn from 'classnames';
import { usePathname } from 'next/navigation';

import Badge from '@/components/Badge/Badge';
import { useUpdateEffect } from '@/hooks/useUpdateEffect';
import { ROUTES } from '@/shared/constants/routes';

import { STEPS } from '../constants';
import { ExperienceFormValues, WriteStatusType } from '../types';
import styles from './StepMenuItem.module.scss';

interface StepMenuItemProps extends Pick<HTMLAttributes<HTMLLIElement>, 'className'> {
  title: (typeof STEPS)[number]['title'];
  status: WriteStatusType;
}

const StepMenuItem = ({ title, status, className }: StepMenuItemProps) => {
  const pathname = usePathname();
  const prevPathname = usePrevious(pathname);
  const prevStepIndex = (STEPS.find((v) => v.route === prevPathname)?.id ?? 1) - 1;
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
      return `${title}(${경험정보count}/3)`;
    }
    if (title === '경험내용') {
      return `${title}(${경험내용count}/4)`;
    }

    return title;
  };

  const setWriteStatus = useCallback(
    (target: WriteStatusType[], status: WriteStatusType) => {
      target[prevStepIndex] = status;
      setValue('writeStatus', target);
    },
    [setValue, prevStepIndex]
  );

  useEffect(() => {
    const writeStatus = getValues('writeStatus') as WriteStatusType[];
    const copyWriteStatus = [...(writeStatus as WriteStatusType[])];

    if (경험정보count === 3 || 경험내용count === 4) {
      copyWriteStatus[currentStepIndex] = '작성완료';
      setValue('writeStatus', copyWriteStatus);
    } else {
      copyWriteStatus[currentStepIndex] = '작성중';
      setValue('writeStatus', copyWriteStatus);
    }
  }, [경험정보count, 경험내용count, currentStepIndex, setValue, getValues]);

  useEffect(() => {
    const writeStatus = getValues('writeStatus') as WriteStatusType[];
    const copyWriteStatus = [...writeStatus];

    // 이탈시 validation check
    return () => {
      switch (prevPathname) {
        case ROUTES.EXPERIENCE:
          const experiencePageValues = getValues([
            'title',
            'startYYYY',
            'startMM',
            'endYYYY',
            'endMM',
            'experienceRole',
            'motivation',
          ]);
          if (experiencePageValues.every((v) => !!v)) {
            setWriteStatus(copyWriteStatus, '작성완료');
          } else if (experiencePageValues.some((v) => !!v)) {
            setWriteStatus(copyWriteStatus, '작성중');
          } else {
            setWriteStatus(copyWriteStatus, '미작성');
          }
          break;
        case ROUTES.KEYWORD:
          const keywords = getValues('keywords');
          if (keywords.some(([, isSelected]) => isSelected === true)) {
            setWriteStatus(copyWriteStatus, '작성완료');
          } else {
            setWriteStatus(copyWriteStatus, '미작성');
          }
          break;
        case ROUTES.INFORMATION:
          const informationPageValues = getValues(['situation', 'task', 'action', 'result']);
          if (informationPageValues.every((v) => !!v)) {
            setWriteStatus(copyWriteStatus, '작성완료');
          } else if (informationPageValues.some((v) => !!v)) {
            setWriteStatus(copyWriteStatus, '작성중');
          } else {
            setWriteStatus(copyWriteStatus, '미작성');
          }
          break;
        case ROUTES.VERIFY:
          const [capabilities, resume] = getValues(['capabilities', 'resume']);
          if (!!capabilities.length && !!resume) {
            setWriteStatus(copyWriteStatus, '작성완료');
          } else if (!!capabilities.length || !!resume) {
            setWriteStatus(copyWriteStatus, '작성중');
          } else {
            setWriteStatus(copyWriteStatus, '미작성');
          }
          break;
        default:
          break;
      }
    };
  }, [getValues, pathname, prevPathname, currentStepIndex, setWriteStatus]);

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
