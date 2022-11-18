import React from 'react';
import './App.css';
import WordQuiz from './WordQuiz';
import { Grid } from 'react-bootstrap';

const App = () => {
  return (
    <div>
      <Grid>
        <WordQuiz/>
      </Grid>
    </div>
  );
};

export default App;
