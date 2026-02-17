const express = require("express");
const authRouter = express.Router();
const userModel = require("../model/user.model.js");
const jwt = require("jsonwebtoken");

authRouter.post("/register", async (req, res) => {
  const { email, name, password } = req.body;

  const isUserAlreadyExist = await userModel.findOne({ email });

  if (isUserAlreadyExist) {
    return res.status(400).json({
      message: "user Already Exist",
    });
  }

  const user = await userModel.create({
    email,
    name,
    password,
  });

  const tokan = jwt.sign(
    {
      id: user._id,
    },
    process.env.JWT_SECRET,
  );
  res.cookie("jwt_token",tokan)
  res.status(201).json({
    message: "user Created",
    user,
    tokan
  });
});

module.exports = authRouter;
