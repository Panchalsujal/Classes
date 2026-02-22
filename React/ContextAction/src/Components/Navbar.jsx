import React, { useContext } from "react";
import { Changecontext } from "../Context/ThemeContext";


const Navbar = () => {
  const data = useContext(Changecontext);
  return (
    <div className="nav-bar bg-amber-900 text-amber-50 flex justify-between p-20">
      <h1>Navbar</h1>
      <p>{data}</p>
    </div>
  );
};

export default Navbar;
