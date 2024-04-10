import React from 'react';
import './ResponseNegative.css';
import mentalHealthBarcode from '../img/mentalHealthBarcode.png'; 

function ResponseNegative() {
  return (
    <div className="responseNegative-container">
      <h1>Sorry you are feeling bad...</h1>
      <h1>If you ever need to access Yale's mental health resources, scan the code below.</h1>
      <img src={mentalHealthBarcode} alt="Mental Health" />
    </div>
  );
}

export default ResponseNegative;