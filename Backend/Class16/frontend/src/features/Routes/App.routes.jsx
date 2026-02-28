import { createBrowserRouter, Navigate } from "react-router";
import Login from "../auth/pages/login";
import Register from "../auth/pages/Register";
import Feeds from "../posts/pages/feed";

export const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/",
    element: <Navigate to="/login" />,
  },
  {
    path: "/Feed",
    element: <Feeds />,
  },
]);
