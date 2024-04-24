import React from "react";
import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import QuestionOne from "./components/QuestionOne";
import ResponsePositive from "./components/ResponsePositive";
import ResponseNegative from "./components/ResponseNegative";
import PeopleTracker from "./components/PeopleTracker";
import WebSocketComponent from "./web-socket-connection/connection";
import AnotherComponent from "./components/Direction";

function App() {
  return (
    <Router>


      <div className="min-h-screen text-white bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-600">
        <header className="p-5 text-4xl font-bold text-center bg-gray-900 bg-opacity-75 shadow-lg">
          Mental Health App
        </header>
        <main className="flex flex-col items-center justify-center p-4">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/websocket" element={<WebSocketComponent />} />
            <Route path="/question-one" element={<QuestionOne />} />
            <Route path="/positive" element={<ResponsePositive />} />
            <Route path="/negative" element={<ResponseNegative />} />
            <Route path="/people" element={<PeopleTracker />} />
            <Route path="/another" element={<AnotherComponent />} />

          </Routes>
        </main>

        {/*<WebSocketComponent />*/}


      </div>
    </Router>
  );
}







export default App;

