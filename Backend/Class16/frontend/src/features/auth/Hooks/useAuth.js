import { useContext } from "react";
import { AuthContext } from "../Context/auth.context";
import { login, register } from "../services/auth.api";
import Register from "../pages/Register";
import { useNavigate } from "react-router";

export const useAuth = () => {
  const Navigate = useNavigate();
  const context = useContext(AuthContext);

  const { user, Loading, setuser, setLoading } = context;

  const handlelogin = async (username, password) => {
    setLoading(true);
    try {
      const response = await login(username, password);
      setuser(response.user);
     
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
       Navigate("/Feed");
    }
  };
  const handleRegister = async (username, email, password) => {
    setLoading(true);
    try {
      const response = await register(username, email, password);
      setuser(response.user);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return {
    user,
    Loading,
    handlelogin,
    handleRegister,
  };
};
