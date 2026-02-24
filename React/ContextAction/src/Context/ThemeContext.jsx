import React, { createContext, useState } from "react";

export const Changecontext = createContext();
const ThemeContext = (props) => {
  const [first, setFirst] = useState("Dark");
  return (
    <div>
      <Changecontext.Provider value={[first, setFirst]}>
        {props.children}
      </Changecontext.Provider>
    </div>
  );
};

const ChangeThemecontext = createContext();
export default ThemeContext;
