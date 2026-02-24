const express = require("express");
const postRouter = express.Router();
const postController = require("../controllers/post.controller");
const multer = require("multer");
const upload = multer({ storage: multer.memoryStorage() });
const identifyuser = require("../middleware/auth.middleware");
const followUserControllers = require("../controllers/users.controller");

/**
 * POST /api/posts [protected]
 * - req.body = { caption,image-file }
 */
postRouter.post(
  "/",
  upload.single("image"),
  identifyuser,
  postController.createPostController,
);

/**
 * GET /api/posts/ [protected]
 */
postRouter.get("/", identifyuser, postController.getPostController);

/**
 * GET /api/posts/details/:postid
 * - return an detail about specific post with the id. also check whether the post belongs to the user that the request come from
 */
postRouter.get(
  "/details/:postId",
  identifyuser,
  postController.getPostDetailsController,
);

module.exports = postRouter;
