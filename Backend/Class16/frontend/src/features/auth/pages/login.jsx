import React, { useState } from "react";
import "../Styles/form.scss";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../Hooks/useAuth";
const Login = () => {

  const { user, Loading, handlelogin } = useAuth();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await handlelogin(username, password);
      
    } catch (error) {
      console.log(error);
    }
  };

  if (Loading) {
    return (
      <main>
        <h1>Loading...</h1>
      </main>
    );
  }
  return (
    <main>
      <div className="form-container">
        <h1>Log into Instagram</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            required
            placeholder="Enter username"
            name="username"
            id="username"
            onInput={(e) => {
              setUsername(e.target.value);
            }}
          />
          <input
            type="password"
            required
            placeholder="Enter password"
            name="password"
            id="password"
            onInput={(e) => {
              setPassword(e.target.value);
            }}
          />
          <button className="button primary-button">Login</button>
        </form>
        <p>
          Don't have an account? <Link to="/register">Sign up</Link>
        </p>
      </div>
    </main>
  );
};

export default Login;
