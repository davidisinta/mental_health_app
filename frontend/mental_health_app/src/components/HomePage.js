import React from 'react';
import { useNavigate } from 'react-router-dom';
import './HomePage.css';

const HomePage = () => {
  const navigate = useNavigate();

  const handlePlayClick = () => {
    navigate('/question-one');
  };

  return (
    <div className="home-container">
      <h1>Want to play? <span role="img" aria-label="hand-up">🙋</span></h1>
      <button onClick={handlePlayClick}>Yes, let's play!</button>
    </div>
  );
}

export default HomePage;