import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import QuestionOne from './components/QuestionOne';
import ResponsePositive from './components/ResponsePositive';
import ResponseNegative from './components/ResponseNegative';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes> 
          <Route path="/" element={<HomePage />} />
          <Route path="/question-one" element={<QuestionOne />} />
          <Route path="/positive" element={<ResponsePositive />} />
          <Route path="/negative" element={<ResponseNegative />} />
        </Routes>
      </div>
    </Router>
  );
}
export default App;