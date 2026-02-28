import { createContext, useState } from "react";

export const PostContext = createContext();

export const PostContextProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);

  /*
  ❌ Tumne Feed initial null rakha tha
  Fir Feed.map() use kar rahe the → crash
  ✅ Default empty array hona chahiye
  */
  const [Feed, setFeed] = useState([]);

  const [Post, setPost] = useState([]);

  return (
    <PostContext.Provider
      value={{
        loading,
        setLoading,
        Post,
        setPost,
        Feed,
        setFeed,
      }}
    >
      {children}
    </PostContext.Provider>
  );
};
