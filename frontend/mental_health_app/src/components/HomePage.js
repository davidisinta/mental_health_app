import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();

  const handlePlayClick = () => {
    navigate("/question-one");
  };

  useEffect(() => {
    const delay = 5000; // 5 seconds delay
    const timer = setTimeout(() => {
      const randomNumber = Math.floor(Math.random() * 11); // Generates a random number between 0 and 10
      if (randomNumber > 4) {
        // If the random number is greater than 4, simulate a click on the button
        handlePlayClick();
      }
    }, delay);

    return () => clearTimeout(timer); // Clean up the timer on component unmount
  }, []); // Empty dependency array ensures the effect runs only once after initial render

  return (
    <div className="flex items-center justify-center w-screen h-screen bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-600">
      <button
        onClick={handlePlayClick}
        className="flex items-center justify-center h-64 max-w-2xl px-8 py-4 text-4xl font-bold text-white transition duration-500 ease-in-out transform bg-transparent border-4 border-white rounded-full shadow-xl hover:scale-105 hover:bg-white hover:text-indigo-500 hover:shadow-2xl"
        style={{ backdropFilter: "blur(10px)" }}
      >
        {" "}
        <span role="img" aria-label="raising hand">
          🙋
        </span>
        I Have A Question!
        <br />
        <br />
        Raise Your Hand To Answer{" "}
        <span role="img" aria-label="raising hand">
          🙋
        </span>
      </button>
    </div>
  );
};

export default HomePage;
