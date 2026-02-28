import { createContext, useState } from "react";
export const AuthContext = createContext();
export const AuthProvider = ({ children }) => {
  const [user, setuser] = useState(null);
  const [Loading, setLoading] = useState(false);

  return (
    <AuthContext.Provider value={{ user, Loading, setuser, setLoading }}>
      {children}
    </AuthContext.Provider>
  );
};
