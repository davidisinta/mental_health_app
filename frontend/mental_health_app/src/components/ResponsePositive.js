import React from 'react';
import './ResponsePositive.css';
import mentalHealthBarcode from '../img/mentalHealthBarcode.png'; 

function ResponsePositive() {
  return (
    <div className="responsePositive-container">
      <h1>Happy to hear you're feeling good! 😊</h1>
      <h1>If you ever need to access Yale's mental health resources, scan the code below.</h1>
      <img src={mentalHealthBarcode} alt="Mental Health" />
    </div>
  );
}

export default ResponsePositive;