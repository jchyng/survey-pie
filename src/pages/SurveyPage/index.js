import { useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

import ProgressIndicator from '../../components/ProgressIndicator';
import QuestionBox from '../../components/QuestionBox';

export default function SurveyPage() {
  const urlParams = useParams();
  const step = parseInt(urlParams.step, 10);

  const questions = [
    {
      title: '제목1',
      desc: '설명1',
      type: 'text',
      required: true,
      option: {
        placeholder: '텍스트를 입력해주세요',
      },
    },
    {
      title: '제목2',
      desc: '설명2',
      type: 'textarea',
      required: true,
      option: {
        placeholder: '텍스트를 입력해주세요',
      },
    },
    {
      title: '제목3',
      desc: '설명3',
      type: 'select',
      required: true,
      option: {
        items: ['선택1', '선택2', '선택3'],
      },
    },
  ];

  const [answers, setAnswers] = useState([]);

  return (
    <SurveyPageWrapper>
      <ProgressIndicator />
      <QuestionBox
        question={questions[step]}
        questionLength={questions.length}
        step={step}
        options={questions[step].option}
        answer={answers[step]}
        setAnswers={(newAnswer) => {
          setAnswers((prevAnswers) => {
            const newAnswers = [...prevAnswers];
            newAnswers[step] = newAnswer;
            console.log(newAnswers);
            return newAnswers;
          });
        }}
      />
    </SurveyPageWrapper>
  );
}

const SurveyPageWrapper = styled.div`
  min-height: 100%;
  width: 100%;
`;
