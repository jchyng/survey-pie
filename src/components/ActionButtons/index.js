export default function ActionButtons({ questionLength, step }) {
  const isLastStep = step === questionLength - 1;

  return (
    <div>
      {step === 0 || <button type="button">이전</button>}
      {isLastStep ? <button type="button">제출</button> : <button type="button">다음</button>}
    </div>
  );
}
