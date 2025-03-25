import styled from 'styled-components';

function Item({ children, onChange }) {
  return (
    <ItemWrapper>
      <label htmlFor={`checkbox-${children}`}>
        <input type="checkbox" id={`checkbox-${children}`} onChange={onChange} />
        <span />
        <div>{children}</div>
      </label>
    </ItemWrapper>
  );
}

const ItemWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 8px;

  input[type='checkbox'] {
    display: none;
  }

  input[type='checkbox'] ~ span {
    width: 24px;
    height: 24px;
    border: 3px solid #e0e0e0;
    box-sizing: border-box;
    display: inline-block;
    border-radius: 100%;
    vertical-align: middle;
    margin-right: 10px;
  }

  input[type='checkbox']:checked ~ span {
    border: 8px solid #6542f1;
  }

  input[type='checkbox'] ~ div {
    font-size: 14px;
    line-height: 18px;
    display: inline-block;
    vertical-align: middle;
  }

  input[type='checkbox']:checked ~ div {
    font-weight: bold;
  }
`;

export default function SelectInput({ options, answer = [], setAnswers }) {
  const handleChange = (isChecked, idx) => {
    if (isChecked) {
      setAnswers([...answer, idx]);
    } else {
      setAnswers(answer.filter((item) => item !== idx));
    }
  };

  return (
    <SelectWrapper>
      {options.items.map((item, idx) => {
        return (
          <Item
            onChange={(e) => {
              handleChange(e.target.checked, idx);
            }}
          >
            {item}
          </Item>
        );
      })}
    </SelectWrapper>
  );
}

const SelectWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;
