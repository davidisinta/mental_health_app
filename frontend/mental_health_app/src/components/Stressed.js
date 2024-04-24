import React from "react";
import { useNavigate } from "react-router-dom";

function QuestionOne() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center w-screen h-screen text-white bg-gradient-to-r from-purple-500 via-blue-300 to-pink-400">
      <div className="p-6 text-4xl font-bold text-center">
        How are you feeling today?
      </div>
      <div className="mb-6 text-lg text-center">
        For 3 seconds, hold your{" "}
        <span className="font-semibold text-purple-600">left</span> hand to
        answer "<span className="font-semibold">Could Be Better...</span>" or
        your <span className="font-semibold text-blue-400">right</span> hand to
        answer "<span className="font-semibold">Great!</span>".
      </div>
      <div className="flex w-full h-full px-20">
        <button
          onClick={() => navigate("/question-two")}
          className="w-1/2 mr-8 text-4xl font-semibold transition duration-500 ease-in-out transform border-4 border-purple-600 rounded-lg shadow-xl h-3/5 bg-gradient-to-bl hover:scale-105 hover:bg-gradient-to-br from-purple-600 to-purple-400 hover:text-yellow-400 hover:shadow-2xl"
          style={{ backdropFilter: "blur(10px)" }}
        >
          Could Be Better...
        </button>
        <button
          onClick={() => navigate("/question-three-pos")}
          className="w-1/2 text-4xl font-semibold transition duration-500 ease-in-out transform border-4 border-blue-400 rounded-lg shadow-xl h-3/5 bg-gradient-to-bl hover:scale-105 hover:bg-gradient-to-br from-blue-400 to-blue-200 hover:text-yellow-400 hover:shadow-2xl"
          style={{ backdropFilter: "blur(10px)" }}
        >
          Great!
        </button>
      </div>
    </div>
  );
}

export default QuestionOne;
