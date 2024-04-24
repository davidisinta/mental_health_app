import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import bulldogBalanceLogo from "../img/bulldogBalance.png";

function Stressed() {
  const navigate = useNavigate();

  useEffect(() => {
    const timeout = setTimeout(() => {
      navigate("/");
    }, 20000);

    return () => clearTimeout(timeout);
  }, [navigate]);

  return (
    <div
      className="flex flex-col items-center justify-center w-screen h-screen p-4 text-white bg-gradient-to-br from-purple-500 via-blue-300 to-pink-400"
      style={{ marginTop: "-8%" }}
    >
      <div className="p-6 text-4xl font-bold text-center">Meditation</div>
      <div className="mb-4 text-lg text-center">
        Meditation To Relieve Stress
      </div>
      <div className="mb-4 text-lg text-center">
        Research suggests that mindfulness meditation can reduce stress by
        altering brain activity in regions associated with the body's stress
        response. Focus on your breath, sensations in your body, and thoughts
        without judgment. Notice them and let them pass without getting caught
        up in them.
      </div>
      <br />
      <div className="flex justify-center w-full max-w-md">
        <img
          src={bulldogBalanceLogo}
          alt="Bulldog Balance Logo"
          className="w-3/4"
        />
      </div>
    </div>
  );
}

export default Stressed;
