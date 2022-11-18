import React from 'react';
import { ToggleButtonGroup, ToggleButton } from 'react-bootstrap';

const WordTableRow = ({number, word}) => {
  
  const handleChange = (value) => {
    word.setKnow(value);
  };

  return (
    <tr>
      <td width="1px">
        {number}
      </td>
      <td>
        {
          <a
            href={`http://endic.naver.com/search.nhn?sLn=en&isOnlyViewEE=N&query=${word.term}`}
            target="_blank"
            title={`Group: ${word.group}`}
          >
            <span className="wordTerm">{word.term}</span>
          </a>
        }
      </td>
      <td>
        <ToggleButtonGroup
          type="radio"
          name="know"
          value={word.know}
          onChange={handleChange}
        >
          <ToggleButton value={true} bsSize="large" bsStyle={word.know === true  ? 'success' : 'default'}>◯</ToggleButton>
          <ToggleButton value={false} bsSize="large"  bsStyle={word.know === false ? 'danger' : 'default'}>✕</ToggleButton>
        </ToggleButtonGroup>
      </td>
    </tr>
  );
}

export default WordTableRow;