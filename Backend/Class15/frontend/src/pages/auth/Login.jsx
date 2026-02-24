import React, { useState } from "react";
import "../styles/form.scss";
import { Link } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");

  async function LoginHendal(e) {
    e.preventDefault();
    await axios
      .post(
        "http://localhost:3000/api/auth/login",
        {
          username,
          password,
        },
        {
          withCredentials: true,
        },
      )
      .then((res) => {
        console.log(res.data);
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
