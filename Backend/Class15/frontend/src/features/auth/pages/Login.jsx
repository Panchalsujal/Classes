import React, { useState } from "react";
import "../styles/form.scss";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useAuth } from "../Hooks/useAuth.js";
const Login = () => {
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  const navigate = useNavigate();
  const { handleLogin, loading } = useAuth();

  if (loading) {
    return <h1>loading...</h1>;
  }

  async function LoginHendal(e) {
    e.preventDefault();
    handleLogin(username, password).then((res) => {
      navigate("/");
    });
  }
  return (
    <main>
      <div className="form-container">
        <h1>Login</h1>
        <form onSubmit={LoginHendal}>
          <input
            onChange={(e) => {
              setusername(e.target.value);
            }}
            type="text"
            placeholder="Enter username"
            name="username"
            required
          />
          <input
            type="password"
            placeholder="Enter password"
            name="password"
            onChange={(e) => {
              setpassword(e.target.value);
            }}
            required
          />
          <button type="submit">Login</button>
        </form>
        <p>
          Don't have an account? <Link to="/register">Register here</Link>
        </p>
      </div>
    </main>
  );
};

export default Login;
