import React from "react";
import { Link, useNavigate } from "react-router-dom";
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
        className="flex items-center transition hover:brightness-125"
      >
        <ArrowBackIcon />
        Go Back
      </button>
      <Link
        to="/"
        className="flex items-center transition hover:brightness-125"
      >
        <HomeIcon />
        Home
      </Link>
      <button
        onClick={goForward}
        className="flex items-center transition hover:brightness-125"
      >
        Go Forward
        <ArrowForwardIcon />
      </button>
    </nav>
  );
};

export default NavBar;
