import ActionButtons from '../ActionButtons';
import Body from '../Body';
import Desc from '../Desc';
import Title from '../Title';

export default function QuestionBox({ question, questionLength, step, answer, setAnswers }) {
  return (
    <div>
      <Title>{question.title}</Title>
      <Desc>{question.desc}</Desc>
      <Body type={question.type} answer={answer} setAnswers={setAnswers} />
      <ActionButtons questionLength={questionLength} step={step} />
    </div>
  );
}
