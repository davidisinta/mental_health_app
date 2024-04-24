import React from "react";
import { Link } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import PeopleIcon from "@mui/icons-material/People";
import ChatIcon from "@mui/icons-material/Chat";

const NavBar = () => {
  return (
    <nav className="flex items-center justify-between p-4 text-white bg-black shadow-md bg-opacity-80">
      <Link to="/" className="transition hover:brightness-125">
        Home
      </Link>
      <Link to="/people" className="transition hover:brightness-125">
        People Tracker
      </Link>
      <Link to="/websocket" className="transition hover:brightness-125">
        WebSocket
      </Link>
    </nav>
  );
};

export default NavBar;
