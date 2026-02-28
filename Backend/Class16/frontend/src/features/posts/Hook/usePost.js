import { useContext, useCallback } from "react";
import { PostContext } from "../Context/post.context";
import { getFeed } from "../services/post.api";

export const usePost = () => {
  const context = useContext(PostContext);

  /*
  ❌ Agar Provider wrap nahi hoga toh context undefined hoga
  Yeh safety check helpful hai debugging me
  */
  if (!context) {
    throw new Error("usePost must be used inside PostContextProvider");
  }

  const { loading, setLoading, Post, setPost, Feed, setFeed } = context;

  /*
  ❌ Tum handleGetFeed ko dependency me use kar rahe the
  Wo har render pe recreate hota tha → infinite loop risk
  ✅ useCallback use kiya
  */
  const handleGetFeed = useCallback(async () => {
    setLoading(true);
    try {
      const response = await getFeed();

      /*
      ❌ Tum setFeed commented kar diya tha
      Isliye Feed kabhi update hi nahi hota tha
      */

      /*
      IMPORTANT:
      Pehle console.log(response) karke backend structure check karo.
      Assume kar raha hoon backend return karta hai:
      { post: [...] }
      */

      setFeed(response.post); // agar backend { posts: [] } bhej raha ho toh change karna
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }, [setLoading, setFeed]);

  return { Feed, loading, handleGetFeed, Post };
};
