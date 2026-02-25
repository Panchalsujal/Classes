const express = require("express");
const authRouter = express.Router();
const authControllers = require("../controllers/auth.controller");
const indentifyUser = require("../middleware/auth.middleware");
// user registration Api
authRouter.post("/register", authControllers.registerController);
// user login Api
authRouter.post("/login", authControllers.loginController);

authRouter.get("/get-me", indentifyUser, authControllers.profilecontroller);

module.exports = authRouter;
