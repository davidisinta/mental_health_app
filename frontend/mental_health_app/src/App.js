import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import QuestionOne from './components/QuestionOne';
import ResponsePositive from './components/ResponsePositive';
import ResponseNegative from './components/ResponseNegative';
import PeopleTracker from "./components/PeopleTracker";
import WebSocketComponent from "./web-socket-connection/connection";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes> 
          <Route path="/" element={<HomePage />} />
           <Route path="/websocket" element={<WebSocketComponent />} />
          <Route path="/question-one" element={<QuestionOne />} />
          <Route path="/positive" element={<ResponsePositive />} />
          <Route path="/negative" element={<ResponseNegative />} />
          <Route path="/people" element={<PeopleTracker />} />
        </Routes>
      </div>
    </Router>
  );
}
export default App;