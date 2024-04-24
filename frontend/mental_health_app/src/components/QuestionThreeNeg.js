import React from "react";
import { useNavigate } from "react-router-dom";

function QuestionOne() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center w-screen h-screen text-white bg-gradient-to-r from-purple-500 via-blue-300 to-pink-400">
      <div className="p-6 text-4xl font-bold text-center">
        What is a major factor making your mental health worse right now?
      </div>
      <div className="mb-6 text-lg text-center">
        Raise your hand and hold for 3 seconds to interact!
      </div>
      <div className="flex w-full h-full px-20">
        <button
          onClick={() => navigate("/question-four-neg")}
          className="w-1/4 mr-4 text-4xl font-semibold transition duration-500 ease-in-out transform border-4 border-purple-600 rounded-lg shadow-xl h-3/5 bg-gradient-to-bl hover:scale-105 hover:bg-gradient-to-br from-purple-600 to-purple-400 hover:text-yellow-400 hover:shadow-2xl"
          style={{ backdropFilter: "blur(10px)" }}
        >
          Schoolwork
        </button>
        <button
          onClick={() => navigate("/question-four-neg")}
          className="w-1/4 mr-4 text-4xl font-semibold transition duration-500 ease-in-out transform border-4 border-blue-400 rounded-lg shadow-xl h-3/5 bg-gradient-to-bl hover:scale-105 hover:bg-gradient-to-br from-blue-400 to-blue-200 hover:text-yellow-400 hover:shadow-2xl"
          style={{ backdropFilter: "blur(10px)" }}
        >
          Social Life
        </button>
        <button
          onClick={() => navigate("/question-four-neg")}
          className="w-1/4 mr-4 text-4xl font-semibold transition duration-500 ease-in-out transform border-4 border-pink-400 rounded-lg shadow-xl h-3/5 bg-gradient-to-bl hover:scale-105 hover:bg-gradient-to-br from-pink-400 to-pink-200 hover:text-yellow-400 hover:shadow-2xl"
          style={{ backdropFilter: "blur(10px)" }}
        >
          Sleep
        </button>
        <button
          onClick={() => navigate("/question-four-neg")}
          className="w-1/4 text-4xl font-semibold transition duration-500 ease-in-out transform border-4 border-gray-300 rounded-lg shadow-xl h-3/5 bg-gradient-to-bl hover:scale-105 hover:bg-gradient-to-br from-gray-400 to-gray-200 hover:text-yellow-400 hover:shadow-2xl"
          style={{ backdropFilter: "blur(10px)" }}
        >
          Other
        </button>
      </div>
    </div>
  );
}

export default QuestionOne;
