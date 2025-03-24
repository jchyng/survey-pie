import TextInput from '../TextInput';

export default function Body({ type, answer, setAnswers }) {
  let InputComponent = null;

  switch (type) {
    case 'select':
      break;
    case 'text':
      InputComponent = TextInput;
      break;
    case 'textarea':
      break;
    default:
      break;
  }

  return <InputComponent answer={answer} setAnswers={setAnswers} />;
}
