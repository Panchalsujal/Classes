import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000/api/auth",
  withCredentials: true,
});

export const login = async (username, password) => {
  try {
    const response = await api.post("/login", { username, password });
    return response.data;
  } catch (error) {
    console.error("Login failed:", error);
    throw error;
  }
};

export const register = async (username, email, password) => {
  try {
    const response = await api.post("/register", { username, email, password });
    return response.data;
  } catch (error) {
    console.error("Register failed:", error);
    throw error;
  }
};

export const getme = async () => {
  try {
    const response = await api.get("/get-me");
    return response.data;
  } catch (error) {
    console.error("Get user info failed:", error);
    throw error;
  }
};
