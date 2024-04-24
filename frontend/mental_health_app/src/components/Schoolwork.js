import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import bulldogBalanceLogo from "../img/bulldogBalance.png";

function Schoolwork() {
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
      <div className="p-6 text-4xl font-bold text-center">
        Tip To Improve Schoolwork Management
      </div>
      <div className="mb-4 text-lg text-center">
        Feeling overwhelmed with schoolwork?
      </div>
      <div className="mb-4 text-lg text-center">
        Bulldog Balance says: "Try breaking tasks into smaller, manageable
        chunks. Create a to-do list and prioritize tasks based on deadlines.
        Take short breaks between tasks to stay focused and avoid burnout."
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

export default Schoolwork;
