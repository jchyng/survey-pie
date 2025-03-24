export default function TextInput({ answer, setAnswers }) {
  return (
    <input
      type="text"
      value={answer}
      onChange={(e) => {
        setAnswers(e.target.value);
      }}
    />
  );
}
