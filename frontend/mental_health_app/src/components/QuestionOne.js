import React from 'react';
import { useNavigate } from 'react-router-dom';
import './QuestionOne.css';

function QuestionOne() {
  let navigate = useNavigate();

  return (
    <div className="root">
      <div className="question">
        How are you feeling today?
      </div>
      <div className="answer-buttons">
        <button onClick={() => navigate('/positive')}>Good</button>
        <button onClick={() => navigate('/negative')}>Bad</button>
      </div>
    </div>
  );
}

export default QuestionOne;