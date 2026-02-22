import React, { useContext } from "react";
import { userDataContext } from "./Context/UserContext";
import Home from "./Components/Home";

const App = () => {
  const data = useContext(userDataContext);
  return (
    <div>
      <>
        <Home />
        <h1>{data}</h1>
      </>
    </div>
  );
};

export default App;
