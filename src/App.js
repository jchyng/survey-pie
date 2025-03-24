import React, { useState } from 'react';

import ProgressIndicator from './components/ProgressIndicator';
import QuestionBox from './components/QuestionBox';

export default function App() {
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

  const step = 0;
  const [answers, setAnswers] = useState([]);

  return (
    <div className="App">
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
    </div>
  );
}
