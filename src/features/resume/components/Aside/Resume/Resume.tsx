import { AccordionItem, AccordionPanel } from '@chakra-ui/react';
import { useParams } from 'next/navigation';

import { useCreateQuestion } from '@/hooks/reactQuery/resume/question/mutation';
import { colors } from '@/styles/theme/foundations/colors';

import { ResumeData } from '../../../types/resume';
import Question from './ResumeItem/Question';
import QuestionAddButton from './ResumeItem/QuestionAddButton';
import Title from './ResumeItem/Title';

const Resume = ({ id, title, questions }: ResumeData) => {
  const { questionId } = useParams();
  const { mutate: createQuestion } = useCreateQuestion();

  const handleAddQuestionButtonClick = () => {
    createQuestion(id);
  };

  return (
    <AccordionItem borderEndWidth={0} borderWidth={0} borderRadius="10px" backgroundColor={colors.white}>
      <Title resumeId={id} title={title} />
      <AccordionPanel display="flex" flexDirection="column" paddingX="0px" paddingY="8px">
        <ul>
          {questions.map((question) => (
            <li key={question.id}>
              <Question active={+questionId === question.id} {...question} />
            </li>
          ))}
        </ul>
        <QuestionAddButton onClick={handleAddQuestionButtonClick} />
      </AccordionPanel>
    </AccordionItem>
  );
};

export default Resume;
