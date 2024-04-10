import React from 'react';
import './App.css';

function App() {
  const navigateToCats = () => {
    window.location.href = process.env.PUBLIC_URL + '/cats.html';
  };

  const navigateToSad = () => {
    window.location.href = process.env.PUBLIC_URL + '/feelbad.html';
  };


  return (
    <div className="App-full-screen">
      <p className="question">
        How are you feeling today?
      </p>
      <div className="answer-buttons">
        <button onClick={navigateToCats} className="answer-button good">Good</button>
        <button onClick={navigateToSad} className="answer-button bad">Bad</button>
      </div>
    </div>
  );
}
export default App;