import { useNavigate } from 'react-router-dom';

export default function ActionButtons({ questionLength, step }) {
  const isLastStep = step === questionLength - 1;
  const navigate = useNavigate();

  return (
    <div>
      {step === 0 || (
        <button
          type="button"
          onClick={() => {
            navigate(`${step - 1}`);
          }}
        >
          이전
        </button>
      )}
      {isLastStep ? (
        <button
          type="button"
          onClick={() => {
            navigate(`/done`);
          }}
        >
          제출
        </button>
      ) : (
        <button
          type="button"
          onClick={() => {
            navigate(`${step + 1}`);
          }}
        >
          다음
        </button>
      )}
    </div>
  );
}
