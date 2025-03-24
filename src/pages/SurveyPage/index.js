import { useState } from 'react';
import { useParams } from 'react-router-dom';

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
      option: {},
    },
    {
      title: '제목2',
      desc: '설명2',
      type: 'text',
      required: true,
      option: {},
    },
  ];

  const [answers, setAnswers] = useState([]);

  return (
    <>
      <ProgressIndicator />
      <QuestionBox
        question={questions[step]}
        questionLength={questions.length}
        step={step}
        answer={answers[step]}
        setAnswers={(newAnswer) => {
          setAnswers((prevAnswers) => {
            const newAnswers = [...prevAnswers];
            newAnswers[step] = newAnswer;
            return newAnswers;
          });
        }}
      />
    </>
  );
}
