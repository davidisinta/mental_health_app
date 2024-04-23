import React from "react";
import { useNavigate } from "react-router-dom";

function QuestionOne() {
  let navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen text-white bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-600">
      <div
        className="mb-10 text-4xl font-bold text-center"
        style={{ minHeight: "10vh" }}
      >
        How are you feeling today?
      </div>

      <div className="flex w-full" style={{ minHeight: "80vh" }}>
        <button
          onClick={() => navigate("/negative")}
          className="flex items-center justify-center w-full h-full text-4xl font-bold transition duration-500 ease-in-out transform border-4 border-white rounded-full hover:scale-105 hover:bg-white hover:text-blue-700"
          style={{ backdropFilter: "blur(10px)" }}
        >
          Bad
        </button>
        <button
          onClick={() => navigate("/positive")}
          className="flex items-center justify-center w-full h-full text-4xl font-bold transition duration-500 ease-in-out transform border-4 border-white rounded-full hover:scale-105 hover:bg-white hover:text-blue-700"
          style={{ backdropFilter: "blur(10px)" }}
        >
          Good
        </button>
      </div>
    </div>
  );
}

export default QuestionOne;
