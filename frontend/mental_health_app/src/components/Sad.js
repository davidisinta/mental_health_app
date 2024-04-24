import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import bulldogBalanceLogo from "../img/bulldogBalance.png";

function Sad() {
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
      <div className="p-6 text-4xl font-bold text-center">Journaling</div>
      <div className="mb-4 text-lg text-center">Journaling To Feel Better</div>
      <div className="mb-4 text-lg text-center">
        Journaling can be a therapeutic tool for processing emotions and
        thoughts. By putting your feelings into words on paper, you may gain
        clarity, insight, and relief from emotional distress. Try setting aside
        some time each day to write about your experiences, thoughts, and
        feelings.
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

export default Sad;
