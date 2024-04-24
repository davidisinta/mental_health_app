import React from "react";
import { useNavigate } from "react-router-dom";

function QuestionOne() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center w-screen h-screen text-white bg-gradient-to-r from-yellow-500 via-red-500 to-pink-600">
      <div className="p-10 text-5xl font-bold text-center">
        How are you feeling today?
      </div>
      <div className="flex w-full h-full px-20">
        <button
          onClick={() => navigate("/negative")}
          className="w-1/2 mr-4 text-4xl font-bold transition duration-500 ease-in-out transform border-4 border-red-600 rounded-lg shadow-xl h-3/4 bg-gradient-to-bl hover:scale-105 hover:bg-gradient-to-br from-red-800 to-red-600 hover:text-white hover:shadow-2xl"
          style={{ backdropFilter: "blur(10px)" }}
        >
          Bad
        </button>
        <button
          onClick={() => navigate("/positive")}
          className="w-1/2 text-4xl font-bold transition duration-500 ease-in-out transform border-4 border-green-600 rounded-lg shadow-xl h-3/4 bg-gradient-to-bl hover:scale-105 hover:bg-gradient-to-br from-green-500 to-green-300 hover:text-white hover:shadow-2xl"
          style={{ backdropFilter: "blur(10px)" }}
        >
          Good
        </button>
      </div>
    </div>
  );
}

export default QuestionOne;
