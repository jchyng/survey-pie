import { useContext } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';

import { SurveyContext } from '../../context/survey';
import Button from '../Button';

export default function ActionButtons() {
  const urlParams = useParams();
  const step = parseInt(urlParams.step, 10);

  const survey = useContext(SurveyContext);
  const { questions } = survey;
  const questionLength = questions.length;

  const isLastStep = step === questionLength - 1;
  const navigate = useNavigate();

  return (
    <ActionButtonsWrapper>
      {step !== 0 && (
        <Button
          type="SECONDARY"
          onClick={() => {
            navigate(`${step - 1}`);
          }}
        >
          이전
        </Button>
      )}
      <Button type="PRIMARY" onClick={() => navigate(isLastStep ? '/done' : `${step + 1}`)}>
        {isLastStep ? '제출' : '다음'}
      </Button>
    </ActionButtonsWrapper>
  );
}

const ActionButtonsWrapper = styled.div`
  margin-top: 72px;
  display: flex;
  gap: 16px;
  justify-content: center;
`;
