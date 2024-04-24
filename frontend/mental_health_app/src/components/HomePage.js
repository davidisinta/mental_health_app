import React from "react";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();

  const handlePlayClick = () => {
    navigate("/question-one");
  };

  return (
    <div className="flex items-center justify-center w-screen h-screen bg-gradient-to-br from-yellow-500 via-red-500 to-pink-600">
      <button
        onClick={handlePlayClick}
        className="flex items-center justify-center h-64 max-w-2xl px-8 py-4 text-4xl font-bold text-white transition-all duration-500 ease-in-out transform bg-black border-4 border-white rounded-full shadow-2xl bg-opacity-80 hover:scale-110 hover:border-yellow-400 hover:text-yellow-400 hover:shadow-lg"
        style={{ backdropFilter: "blur(12px)", marginTop: "-10%" }}
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
