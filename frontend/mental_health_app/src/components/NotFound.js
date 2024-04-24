import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div
      className="flex flex-col items-center justify-center w-screen h-screen text-white bg-gradient-to-r from-purple-500 via-blue-300 to-pink-400"
      style={{ marginTop: "-10%" }}
    >
      <h1 className="mb-4 text-6xl font-bold">404</h1>
      <p className="mb-8 text-xl">Oops! Page not found.</p>
      <p className="mb-8 text-lg">
        Click the button below to go home or go back.
      </p>
      <div className="flex">
        <Link
          to="/"
          className="px-6 py-3 font-semibold text-gray-800 transition duration-300 bg-white rounded-lg shadow hover:shadow-md"
        >
          Go Home
        </Link>
        <button
          onClick={() => window.history.back()}
          className="px-6 py-3 ml-4 font-semibold text-gray-800 transition duration-300 bg-white rounded-lg shadow hover:shadow-md"
        >
          Go Back
        </button>
      </div>
    </div>
  );
};

export default NotFound;
