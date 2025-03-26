import styled from 'styled-components';

export default function TextInput({ options, answer, setAnswer }) {
  return (
    <Input
      type="text"
      value={answer}
      placeholder={options.placeholder}
      onChange={(e) => {
        setAnswer(e.target.value);
      }}
    />
  );
}

const Input = styled.input`
  width: 100%;
  border: 1px solid #e0e0e0;
  box-sizing: border-box;
  border-radius: 5px;

  font-size: 16px;
  line-height: 24px;
`;
