import styled from 'styled-components';

import ProgressIndicator from '../../components/ProgressIndicator';
import QuestionBox from '../../components/QuestionBox';
import { SurveyProvider } from '../../context/survey';

export default function SurveyPage() {
  return (
    <SurveyPageWrapper>
      <SurveyProvider>
        <ProgressIndicator />
        <QuestionBox />
      </SurveyProvider>
    </SurveyPageWrapper>
  );
}

const SurveyPageWrapper = styled.div`
  min-height: 100%;
  width: 100%;
`;
