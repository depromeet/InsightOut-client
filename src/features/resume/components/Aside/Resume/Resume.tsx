import { AccordionItem, AccordionPanel } from '@chakra-ui/react';

import { colors } from '@/styles/theme/foundations/colors';

import Title from './ResumeItem/Title';
import Question from './ResumeItem/Question';
import QuestionAddButton from './ResumeItem/QuestionAddButton';

import { ResumeData } from '../../../types/resume';

const Resume = ({ resume: { title, questions } }: { resume: ResumeData }) => {
  const handleAddQuestionButtonClick = () => {
    /** POST 요청 */
  };

  return (
    <AccordionItem borderEndWidth={0} borderWidth={0} borderRadius="10px" backgroundColor={colors.white}>
      <Title title={title} />
      <AccordionPanel display="flex" flexDirection="column" paddingX="0px" paddingY="8px">
        <ul>
          {questions.map((question) => (
            <li key={question.id}>
              <Question active {...question} />
            </li>
          ))}
        </ul>
        <QuestionAddButton onClick={handleAddQuestionButtonClick} />
      </AccordionPanel>
    </AccordionItem>
  );
};

export default Resume;
