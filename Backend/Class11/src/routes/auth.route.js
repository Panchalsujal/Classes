const express = require("express");
const NoteModel = require("../module/note.model");
const authRoutes = express.Router();
const jwt = require("jsonwebtoken");
const crypto = require("crypto");
require("dotenv").config();

authRoutes.post("/register", async (req, res) => {
  const { email, password, name } = req.body;

  const isUserIsAlready = await NoteModel.findOne({ email });
  if (isUserIsAlready) {
    res.status(400).json({
      massage: "user is Already Exist",
    });
  }
  const hash = crypto.createHash("md5").update(password).digest("hex");

  const user = await NoteModel.create({
    name,
    email,
    password: hash,
  });

  const token = jwt.sign(
    {
      id: user._id,
    },
    process.env.JWT_SECRET,
  );
  res.cookie("jwt_token", token);
  res.status(201).json({
    massage: "User Register SuccessFull",
    user,
  });
});
authRoutes.post("/login", async (req, res) => {
  const { email, password, name } = req.body;

  const user = await NoteModel.findOne({ email });
  if (!user) {
    return res.status(401).json({
      massage: "user is not found with this email address",
    });
  }

  const isPasswordIsMatched =
    user.password === crypto.createHash("md5").update(password).digest("hex");
  if (!isPasswordIsMatched) {
    return res.status(401).json({
      massage: "Invaild Password",
    });
  }

  const token = jwt.sign(
    {
      id: user._id,
    },
    process.env.JWT_SECRET,
  );
  res.cookie("jwt_token", token);
  res.status(201).json({
    massage: "Login SuccessFull",
    user,
  });
});
module.exports = authRoutes;
