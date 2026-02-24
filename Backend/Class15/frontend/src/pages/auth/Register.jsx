import React, { useState } from "react";
import "../styles/form.scss";
import { Link } from "react-router-dom";
import axios from "axios";

const Register = () => {
  const [username, setusername] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  async function registerHendal(e) {
    e.preventDefault();

    try {
      const res = await axios.post(
        "http://localhost:3000/api/auth/register",
        {
          username,
          email,
          password,
        },
        {
          withCredentials: true,
        },
      );

      console.log(res.data);
    } catch (error) {
      console.log(error.response?.data || error.message);
    }
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
