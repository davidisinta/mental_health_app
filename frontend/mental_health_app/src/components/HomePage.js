import React, { useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { useHand } from '../hand/HandRaiseContext';

const HomePage = () => {
  const navigate = useNavigate();
  const { setWhichHandRaised } = useHand();
  const { whichHandRaised} = useHand();

  useEffect(() => {
    // Code to run when `whichHandRaised` changes
    console.log(`The hand raised has changed to: ${whichHandRaised}`);

    switch (whichHandRaised) {
        case 0:
            console.log("No hand is currently raised.");
            break;
        case 1:
          setWhichHandRaised(0);
            navigate("/question-one");
            
            break;
        case 2:
          setWhichHandRaised(0);
            navigate("/question-one");
            break;
        default:
            console.log("Unexpected value.");
    }
  }, [whichHandRaised]);


  const handlePlayClick = () => {
    navigate("/question-one");
  };

  return (
    <div className="flex items-center justify-center w-screen h-screen bg-gradient-to-br from-purple-500 via-blue-300 to-pink-400">
      <button
        onClick={handlePlayClick}
        className="flex items-center justify-center h-64 max-w-2xl px-8 py-4 text-4xl font-bold text-white transition-all duration-500 ease-in-out transform bg-black border-4 border-white rounded-full shadow-2xl bg-opacity-80 hover:scale-110 hover:border-yellow-300 hover:text-yellow-300 hover:shadow-lg"
        style={{ backdropFilter: "blur(12px)", marginTop: "-15%" }}
      >
        <span role="img" aria-label="raising hand">
          🙋
        </span>
        I Have A Question!
        <br />
        <br />
        Raise Your Hand To Answer
        <span role="img" aria-label="raising hand">
          🙋
        </span>
      </button>
    </div>
  );
};

export default HomePage;
