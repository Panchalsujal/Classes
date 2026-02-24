import React from "react";
import { Route, Routes } from "react-router";
import Register from "./pages/auth/register.jsx";
import Login from "./pages/auth/login.jsx";
import Home from "./pages/home.jsx";
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
};

export default App;
