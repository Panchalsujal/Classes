const express = require("express");
const authRouter = express.Router();
const authControllers = require("../controllers/auth.controller");
// user registration Api
authRouter.post("/register", authControllers.registerController);
// user login Api
authRouter.post("/login", authControllers.loginController);
module.exports = authRouter;
