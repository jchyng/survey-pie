import axios from 'axios';
import { createContext, useEffect, useState } from 'react';
import { useParams } from 'react-router';

export const SurveyContext = createContext(null);

export function SurveyProvider({ children }) {
  const [survey, setSurvey] = useState(null);
  const urlParams = useParams();
  const surveyId = parseInt(urlParams.surveyId, 10);

  useEffect(() => {
    const fetchSurvey = async () => {
      try {
        const response = await axios.get(`http://localhost:3001/surveys/${surveyId}`); // 실제 API 엔드포인트로 변경
        setSurvey(response.data);
        console.log('설문 데이터:', response.data);
      } catch (error) {
        console.error('설문 데이터를 불러오는 중 오류 발생:', error);
      }
    };

    fetchSurvey();
  }, []);

  return <SurveyContext.Provider value={survey}>{children}</SurveyContext.Provider>;
}

export default SurveyContext;
