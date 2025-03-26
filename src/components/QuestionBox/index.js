import { useContext, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

import { SurveyContext } from '../../context/survey';
import ActionButtons from '../ActionButtons';
import Body from '../Body';
import Desc from '../Desc';
import Title from '../Title';

export default function QuestionBox() {
  const urlParams = useParams();
  const step = parseInt(urlParams.step, 10);

  const survey = useContext(SurveyContext);
  const questions = survey?.questions || [];
  const question = questions[step];

  const [answers, setAnswers] = useState([]);
  const answer = answers[step];
  const setAnswer = (newAnswer) => {
    setAnswers((prevAnswers) => {
      const newAnswers = [...prevAnswers];
      newAnswers[step] = newAnswer;
      return newAnswers;
    });
  };

  // axios로부터 값을 받아오는 동안 빈 페이지 반환
  if (!questions[step]) {
    return null;
  }

  return (
    <QuestionBoxWrapper>
      <Title>{question.title}</Title>
      <Desc>{question.desc}</Desc>
      <Body type={question.type} options={question.options} answer={answer} setAnswer={setAnswer} />
      <ActionButtons />
    </QuestionBoxWrapper>
  );
}

const QuestionBoxWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;
