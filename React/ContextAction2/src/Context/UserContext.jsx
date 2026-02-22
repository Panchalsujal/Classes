import axios from "axios";
import React, { createContext } from "react";

export const contextdata = createContext();
const UserContext = () => {
  const getdata = async () => {
    const data = await axios.get("https://fakestoreapi.com/products");
    console.log(data);
  };

  return (
    <div>
      <button onClick={getdata}></button>
    </div>
  );
};

export default UserContext;
