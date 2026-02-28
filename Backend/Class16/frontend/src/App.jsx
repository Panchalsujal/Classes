import React from "react";
import { RouterProvider } from "react-router-dom";
import { router } from "./features/Routes/App.routes";
import { AuthProvider } from "./features/auth/Context/auth.context";
import "../src/features/Shared/Globel.scss";
import { PostContextProvider } from "./features/posts/Context/post.context";

const App = () => {
  return (
    <AuthProvider>
      <PostContextProvider>
        <RouterProvider router={router} />
      </PostContextProvider>
    </AuthProvider>
  );
};

export default App;
