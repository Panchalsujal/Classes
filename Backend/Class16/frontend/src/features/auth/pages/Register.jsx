import React, { useState } from "react";
import { Link, useNavigate } from "react-router";
import { useAuth } from "../Hooks/useAuth";

const Register = () => {
  const { user, Loading, handleRegister } = useAuth();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await handleRegister(username, email, password);
    
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <main>
      <div className="form-container">
        <h1>Register into Instagram</h1>
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
            type="email"
            required
            placeholder="Enter email"
            name="email"
            id="email"
            onInput={(e) => {
              setEmail(e.target.value);
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
          <button className="button primary-button">Register</button>
        </form>
        <p>
          Don't have an account? <Link to="/Login">login</Link>
        </p>
      </div>
    </main>
  );
};

export default Register;
