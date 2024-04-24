import React from "react";
import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import WebSocketComponent from "./web-socket-connection/connection";
import QuestionOne from "./components/QuestionOne";
import QuestionTwo from "./components/QuestionTwo";
import QuestionThreePos from "./components/QuestionThreePos";
import QuestionThreeNeg from "./components/QuestionThreeNeg";
import QuestionFourPos from "./components/QuestionFourPos";
import QuestionFourNeg from "./components/QuestionFourNeg";
import ResponsePositive from "./components/ResponsePositive";
import ResponseNegative from "./components/ResponseNegative";
import Schoolwork from "./components/Schoolwork";
import SocialLife from "./components/SocialLife";
import Sleep from "./components/Sleep";
import Angry from "./components/Angry";
import Stressed from "./components/Stressed";
import Sad from "./components/Sad";
import Other from "./components/Other";

import NavBar from "./components/Navbar";
import Footer from "./components/Footer";
import NotFound from "./components/NotFound";
import bulldogBalanceLogo from "./img/bulldogBalance.png";

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen text-white bg-gradient-to-br from-purple-500 via-blue-300 to-pink-400">
        <NavBar />
        <header className="flex items-center justify-center p-6 text-4xl font-bold text-center bg-black bg-opacity-75 shadow-lg">
          <img
            src={bulldogBalanceLogo}
            alt="Bulldog Balance Logo"
            className="w-16 h-16 mr-4"
          />
          <div className="text-5xl font-bold">Bulldog Balance</div>
          <img
            src={bulldogBalanceLogo}
            alt="Bulldog Balance Logo"
            className="w-16 h-16 ml-4"
          />
        </header>
        <div className="flex flex-grow overflow-hidden">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/websocket" element={<WebSocketComponent />} />
            <Route path="/question-one" element={<QuestionOne />} />
            <Route path="/question-two" element={<QuestionTwo />} />
            <Route path="/question-three-pos" element={<QuestionThreePos />} />
            <Route path="/question-three-neg" element={<QuestionThreeNeg />} />
            <Route path="/question-four-pos" element={<QuestionFourPos />} />
            <Route path="/question-four-neg" element={<QuestionFourNeg />} />
            <Route path="/schoolwork" element={<Schoolwork />} />
            <Route path="/social-life" element={<SocialLife />} />
            <Route path="/sleep" element={<Sleep />} />
            <Route path="/angry" element={<Angry />} />
            <Route path="/stressed" element={<Stressed />} />
            <Route path="/sad" element={<Sad />} />
            <Route path="/other" element={<Other />} />
            <Route path="/positive" element={<ResponsePositive />} />
            <Route path="/negative" element={<ResponseNegative />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
