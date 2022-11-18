import React from 'react';
import { Table } from 'react-bootstrap';
import WordTableRow from './WordTableRow'

const WordTable = ({words}) => {
  
  return (
    <Table striped responsive>
      <tbody>
        {
          words.map((word, index) =>
            <WordTableRow
              key={index}
              number={index+1}
              word={word}
            />
          )
        }
      </tbody>
    </Table>
  );
}

export default WordTable;
