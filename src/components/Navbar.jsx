import React, { useContext } from "react";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import { AuthContext } from "../context/AuthContext";
import logout from "../img/logout.png";
import logo from "../img/BlackBox2.png";
import userIcon from "../img/userIcon.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { currentUser } = useContext(AuthContext);

  return (
    <div className="navbar">
      <div className="ugur">
        <img src={logo} alt="" />
      </div>
      <div className="user"></div>
    </div>
  );
};

export default Navbar;
