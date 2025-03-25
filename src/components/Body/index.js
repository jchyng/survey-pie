import styled from 'styled-components';

import SelectInput from '../SelectInput';
import TextAreaInput from '../TextAreaInput';
import TextInput from '../TextInput';

export default function Body({ options, type, answer, setAnswers }) {
  let InputComponent = null;

  switch (type) {
    case 'select':
      InputComponent = SelectInput;
      break;
    case 'text':
      InputComponent = TextInput;
      break;
    case 'textarea':
      InputComponent = TextAreaInput;
      break;
    default:
      break;
  }

  return (
    <BodyWrapper>
      <InputComponent options={options} answer={answer} setAnswers={setAnswers} />
    </BodyWrapper>
  );
}

const BodyWrapper = styled.div`
  flex: 1;
  margin: 0px 38px;
`;
