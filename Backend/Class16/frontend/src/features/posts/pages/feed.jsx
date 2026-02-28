import React, { useEffect } from "react";
import "../styles/feed.scss";
import Post from "../Components/post.jsx";
import { usePost } from "../Hook/usePost.js";

const Feeds = () => {
  const { Feed, loading, handleGetFeed } = usePost();
  // console.log(Feed);
  
  /*
  ❌ Tum dependency me handleGetFeed daal rahe the
  Wo recreate ho raha tha
  ✅ useCallback use kiya hai hook me
  */
  useEffect(() => {
    handleGetFeed();
  }, [handleGetFeed]);

  if (loading) {
    return (
      <main>
        <h1>Feed is Loading...</h1>
      </main>
    );
  }

  return (
    <main className="feed-page">
      <div className="feed">
        <div className="posts">
          {/* 
          Extra safety check:
          Agar Feed empty ho toh message dikha do
          */}

          {Feed.length === 0 ? (
            <h2>No Posts Available</h2>
          ) : (
            Feed.map((post) => (
              <Post key={post._id} user={post.user} post={post} />
            ))
          )}
        </div>
      </div>
    </main>
  );
};

export default Feeds;
