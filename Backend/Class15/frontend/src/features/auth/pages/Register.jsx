import React, { useState } from "react";
import "../styles/form.scss";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useAuth } from "../Hooks/useAuth.js";

const Register = () => {
  const [username, setusername] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const { handleRegister, loading } = useAuth();
  const navigate = useNavigate();

  if (loading) {
    return <h1>loading...</h1>;
  }
  async function registerHendal(e) {
    e.preventDefault();
    handleRegister(username, email, password).then((res) => {
      navigate("/login");
    });
  }

  return (
    <main>
      <div className="form-container">
        <h1>Register</h1>
        <form onSubmit={registerHendal}>
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
            onChange={(e) => {
              setemail(e.target.value);
            }}
            type="email"
            placeholder="Enter email"
            name="email"
            required
          />
          <input
            type="password"
            placeholder="Enter password"
            name="password"
            required
            onChange={(e) => {
              setpassword(e.target.value);
            }}
          />
          <button>Register</button>
        </form>
        <p>
          Already have an account? <Link to="/login">Login here</Link>
        </p>
      </div>
    </main>
  );
};

export default Register;
