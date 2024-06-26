import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import bulldogBalanceLogo from "../img/bulldogBalance.png";

function Angry() {
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
      <div className="p-6 text-4xl font-bold text-center">Breathing</div>
      <div className="mb-4 text-lg text-center">
        Breathing Technique To Help Calm Down
      </div>
      <div className="mb-4 text-lg text-center">
        Take a deep breath in through your nose for a count of four, hold for a
        count of four, then exhale slowly through your mouth for a count of
        four. Repeat several times until you feel more relaxed.
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

export default Angry;
