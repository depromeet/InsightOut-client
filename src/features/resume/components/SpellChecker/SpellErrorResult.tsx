import { Accordion, AccordionItem, AccordionIcon, AccordionButton, AccordionPanel, Flex } from '@chakra-ui/react';

import { textStyles } from '@/styles/theme/foundations/textStyles';
import { colors } from '@/styles/theme/foundations/colors';
import { AlertCircleLine, IconCheckLine, IconXLine } from '@/components/Icon';

import { SpellCheckData } from '../../types/question';
import { useSpellErrors, useAnswer, useQuestionActions } from '../../store';

const SpellErrorResult = () => {
  const answer = useAnswer();
  const spellErrors = useSpellErrors();
  const { setAnswer, setSpellErrors } = useQuestionActions();

  const deleteError = (errorId: number) => {
    const updatedErrors = spellErrors.filter(({ id }) => id !== errorId);
    setSpellErrors(updatedErrors);
  };

  const handleDeleteErrorButtonClick = (errorId: number) => {
    deleteError(errorId);
  };

  const handleFixErrorButtonClick = (errorId: number) => {
    const { error, correct } = spellErrors.find(({ id }) => errorId === id) as SpellCheckData; // NOTE: spellErrors에서 선택한 id 값이므로 반환값이 무조건 있습니다.
    const correctedAnswer = answer.replace(error, correct);
    setAnswer(correctedAnswer);

    deleteError(errorId);
  };

  return (
    <Accordion allowToggle width="full">
      <AccordionItem border={0} css={textStyles.b2}>
        <h2>
          <AccordionButton
            paddingX="24px"
            paddingY="20px"
            borderBottom={'1px'}
            borderColor={colors.gray[100]}
            _hover={{ backgroundColor: 'none' }}>
            <AccordionIcon />
            <AlertCircleLine className="mx-[6px] fill-error [&>path]:stroke-white" />
            맞춤법 검사 오류가<span className="b1">&nbsp;{spellErrors.length}개&nbsp;</span> 발견되었습니다.
          </AccordionButton>
        </h2>
        <AccordionPanel paddingX="26px" css={textStyles.b4}>
          <ul>
            {spellErrors.map(({ id, error, correct }) => (
              <li key={error} className="flex items-center justify-between py-[7px] b3">
                <Flex>
                  <span className="line-through text-error">{error}</span>
                  <span className="text-success">&nbsp;{correct}</span>
                </Flex>
                <Flex gap={'20px'}>
                  <button onClick={() => handleDeleteErrorButtonClick(id)}>
                    <IconXLine />
                  </button>
                  <button onClick={() => handleFixErrorButtonClick(id)}>
                    <IconCheckLine />
                  </button>
                </Flex>
              </li>
            ))}
          </ul>
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
};

export default SpellErrorResult;
