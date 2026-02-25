import React from "react";
import "../styles/home.scss";
import { useNavigate } from "react-router-dom";
const home = () => {
  const navigate = useNavigate();
  function login() {
    navigate("/login");
  }
  function ragister() {
    navigate("/register");
  }
  return (
    <div className="home-h">
      <h1>Home</h1>
      <button onClick={login}>Login</button>
      <button onClick={ragister}>Register</button>
    </div>
  );
};

export default home;
