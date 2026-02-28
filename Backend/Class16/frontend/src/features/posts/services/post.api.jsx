import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000",
  withCredentials: true,
});

/*
❌ Tumne api.get("api/post/feed") likha tha
Better practice:
*/
export const getFeed = async () => {
  const response = await api.get("/api/posts/feed");
  return response.data;
};
