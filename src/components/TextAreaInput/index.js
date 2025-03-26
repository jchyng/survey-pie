import styled from 'styled-components';

export default function TextInput({ options, answer, setAnswer }) {
  return (
    <TextArea
      type="text"
      value={answer}
      placeholder={options.placeholder}
      onChange={(e) => {
        setAnswer(e.target.value);
      }}
    />
  );
}

const TextArea = styled.textarea`
  width: 100%;
  border: 1px solid #e0e0e0;
  box-sizing: border-box;
  border-radius: 5px;

  font-size: 16px;
  line-height: 24px;
  padding: 12px 18px;
  height: 196px;
  resize: none;
`;
