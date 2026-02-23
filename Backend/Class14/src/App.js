const express = require("express");
const cookieparser = require("cookie-parser");
const app = express();
app.use(express.json());
app.use(cookieparser());
const authRouter = require("./routes/user.routes");
const postRouter = require("./routes/post.routes");
app.use("/api/auth/", authRouter);
app.use("/api/posts/", postRouter);

module.exports = app;
