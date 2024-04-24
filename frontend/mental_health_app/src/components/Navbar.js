import React from "react";
import { useNavigate } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const NavBar = () => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  const goForward = () => {
    navigate(1);
  };

  return (
    <nav className="flex items-center justify-between p-4 text-white bg-black shadow-md bg-opacity-80">
      <button
        onClick={goBack}
        className="flex items-center transition duration-300 hover:scale-110 hover:text-yellow-300 hover:shadow-lg"
      >
        <ArrowBackIcon />
        Go Back
      </button>
      <button
        onClick={() => navigate("/")}
        className="flex items-center transition duration-300 hover:scale-110 hover:text-yellow-300 hover:shadow-lg"
      >
        <HomeIcon />
        Home
      </button>
      <button
        onClick={goForward}
        className="flex items-center transition duration-300 hover:scale-110 hover:text-yellow-300 hover:shadow-lg"
      >
        Go Forward
        <ArrowForwardIcon />
      </button>
    </nav>
  );
};

export default NavBar;
