import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useHand } from "../hand/HandRaiseContext";

function QuestionFourPos() {
  const navigate = useNavigate();
  const { whichHandRaised } = useHand();
  const { setWhichHandRaised } = useHand();

  useEffect(() => {
    // Code to run when `whichHandRaised` changes
    console.log(`The hand raised has changed to: ${whichHandRaised}`);

    switch (whichHandRaised) {
      case 0:
        console.log("No hand is currently raised.");
        break;
      case 1:
        setWhichHandRaised(0);
        navigate("/schoolwork");
        break;
      case 2:
        setWhichHandRaised(0);
        navigate("/social-life");
        break;
      case 3:
        setWhichHandRaised(0);
        navigate("/sleep");
        break;
      case 4:
        setWhichHandRaised(0);
        navigate("/positive");
        break;
      default:
        console.log("Unexpected value.");
    }
  }, [whichHandRaised]);

  return (
    <div className="flex flex-col items-center w-screen h-screen text-white bg-gradient-to-r from-purple-500 via-blue-300 to-pink-400">
      <div className="p-6 text-4xl font-bold text-center">
        What factor do you think you have been missing recently?
      </div>
      <div className="mb-6 text-lg text-center">
        Raise your hand and hold for 3 seconds to interact!
      </div>
      <div className="flex w-full h-full px-20">
        <button
          onClick={() => navigate("/schoolwork")}
          className="w-1/4 mr-4 text-4xl font-semibold transition duration-500 ease-in-out transform border-4 border-purple-600 rounded-lg shadow-xl h-3/5 bg-gradient-to-bl hover:scale-105 hover:bg-gradient-to-br from-purple-600 to-purple-400 hover:text-yellow-400 hover:shadow-2xl"
          style={{ backdropFilter: "blur(10px)" }}
        >
          Schoolwork
        </button>
        <button
          onClick={() => navigate("/social-life")}
          className="w-1/4 mr-4 text-4xl font-semibold transition duration-500 ease-in-out transform border-4 border-blue-400 rounded-lg shadow-xl h-3/5 bg-gradient-to-bl hover:scale-105 hover:bg-gradient-to-br from-blue-400 to-blue-200 hover:text-yellow-400 hover:shadow-2xl"
          style={{ backdropFilter: "blur(10px)" }}
        >
          Social Life
        </button>
        <button
          onClick={() => navigate("/sleep")}
          className="w-1/4 mr-4 text-4xl font-semibold transition duration-500 ease-in-out transform border-4 border-pink-400 rounded-lg shadow-xl h-3/5 bg-gradient-to-bl hover:scale-105 hover:bg-gradient-to-br from-pink-400 to-pink-200 hover:text-yellow-400 hover:shadow-2xl"
          style={{ backdropFilter: "blur(10px)" }}
        >
          Sleep
        </button>
        <button
          onClick={() => navigate("/positive")}
          className="w-1/4 text-4xl font-semibold transition duration-500 ease-in-out transform border-4 border-gray-300 rounded-lg shadow-xl h-3/5 bg-gradient-to-bl hover:scale-105 hover:bg-gradient-to-br from-gray-400 to-gray-200 hover:text-yellow-400 hover:shadow-2xl"
          style={{ backdropFilter: "blur(10px)" }}
        >
          Nothing!
        </button>
      </div>
    </div>
  );
}

export default QuestionFourPos;
