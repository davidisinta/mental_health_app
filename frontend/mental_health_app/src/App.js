import React from "react";
import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import QuestionOne from "./components/QuestionOne";
import ResponsePositive from "./components/ResponsePositive";
import ResponseNegative from "./components/ResponseNegative";
import PeopleTracker from "./components/PeopleTracker";
import WebSocketComponent from "./web-socket-connection/connection";
import NotFound from "./components/NotFound";
import NavBar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen text-white bg-gradient-to-br from-yellow-500 via-red-500 to-pink-600">
        <NavBar />
        <header className="p-6 text-4xl font-bold text-center bg-black bg-opacity-75 shadow-lg">
          BulldogBalance
        </header>
        <main className="flex flex-col items-center justify-center flex-grow p-5 mx-auto">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/websocket" element={<WebSocketComponent />} />
            <Route path="/question-one" element={<QuestionOne />} />
            <Route path="/positive" element={<ResponsePositive />} />
            <Route path="/negative" element={<ResponseNegative />} />
            <Route path="/people" element={<PeopleTracker />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
