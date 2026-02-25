import { useContext } from "react";
import { AuthContext } from "../Context/auth.context.jsx";

export const useAuth = () => {
  const context = useContext(AuthContext);
  return context;
};
