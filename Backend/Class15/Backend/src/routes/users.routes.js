const express = require("express");
const userRouter = express.Router();
const userControllers = require("../controllers/users.controller");
const identifyuser = require("../middleware/auth.middleware");

userRouter.post(
  "/follow/:username",
  identifyuser,
  userControllers.followUserControllers,
);
userRouter.post(
  "/unfollow/:username",
  identifyuser,
  userControllers.unFollowUserControllers,
);

module.exports = userRouter;
