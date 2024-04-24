import React, { useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { useHand } from '../hand/HandRaiseContext';

function QuestionTwo() {
  const navigate = useNavigate();
  const { whichHandRaised} = useHand();

  useEffect(() => {
    // Code to run when `whichHandRaised` changes
    console.log(`The hand raised has changed to: ${whichHandRaised}`);

    switch (whichHandRaised) {
        case 0:
            console.log("No hand is currently raised.");
            break;
        case 1:
            navigate("/negative");
            break;
        case 2:
            navigate("/question-three-neg");
            break;
        default:
            console.log("Unexpected value.");
    }
  }, [whichHandRaised]);
  

  return (
    <div className="flex flex-col items-center w-screen h-screen text-white bg-gradient-to-r from-purple-500 via-blue-300 to-pink-400">
      <div className="p-6 text-4xl font-bold text-center">
        Do you want to talk about it more?
      </div>
      <div className="mb-6 text-lg text-center">
        Raise your hand and hold for 3 seconds to interact!
      </div>
      <div className="flex w-full h-full px-20">
        <button
          onClick={() => navigate("/negative")}
          className="w-1/2 mr-8 text-4xl font-semibold transition duration-500 ease-in-out transform border-4 border-purple-600 rounded-lg shadow-xl h-3/5 bg-gradient-to-bl hover:scale-105 hover:bg-gradient-to-br from-purple-600 to-purple-400 hover:text-yellow-400 hover:shadow-2xl"
          style={{ backdropFilter: "blur(10px)" }}
        >
          No Thank You...
        </button>
        <button
          onClick={() => navigate("/question-three-neg")}
          className="w-1/2 text-4xl font-semibold transition duration-500 ease-in-out transform border-4 border-blue-400 rounded-lg shadow-xl h-3/5 bg-gradient-to-bl hover:scale-105 hover:bg-gradient-to-br from-blue-400 to-blue-200 hover:text-yellow-400 hover:shadow-2xl"
          style={{ backdropFilter: "blur(10px)" }}
        >
          Yes Please!
        </button>
      </div>
    </div>
  );
}

export default QuestionTwo;
