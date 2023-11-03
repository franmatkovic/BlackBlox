import { AuthContext } from "../context/AuthContext";
import React, { useContext } from "react";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import backIcon from "../img/backIcon.jpg";
import { useNavigate, Link } from "react-router-dom";
import "../stylee.scss";

const Register = () => {
  const { currentUser } = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="formContainerr">
      <div className="formWrapperr">
        <div className="peter">
          <Link to="/">
            <img src={backIcon} alt="back" />
          </Link>
        </div>
        <div className="logoUser">
          <h1>Overview</h1>
          <img src={currentUser.photoURL} alt="User Avatar" />
        </div>
        <form onSubmit={handleSubmit}>
          <div className="kontoUebersicht">
            <span className="kontoDisplayName">
              <strong>username: </strong>
              <span className="username">{currentUser.displayName}</span>
            </span>
            <span className="kontoDisplayEmail">
              <strong>email: </strong>
              <span className="email">{currentUser.email}</span>
            </span>
            <span className="logoutBtn">
              <Link to="/login">
                <button onClick={() => signOut(auth)}>logout</button>
              </Link>
            </span>{" "}
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
