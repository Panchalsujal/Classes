const express = require("express");
const NoteModel = require("../module/note.model");
const authRoutes = express.Router();
const jwt = require("jsonwebtoken");
require("dotenv").config();

authRoutes.post("/register", async (req, res) => {
  const { email, password, name } = req.body;

  const isUserIsAlready = await NoteModel.findOne({ email });
  if (isUserIsAlready) {
    res.status(400).json({
      massage: "user is Already Exist",
    });
  }
  const user = await NoteModel.create({
    name,
    email,
    password,
  });

  const token = jwt.sign(
    {
      id: user._id,
    },
    process.env.JWT_SECRET,
  );
res.cookie("jwt_token",token)
  res.status(201).json({
    massage: "User Register SuccessFull",
    user,
  });
});

module.exports = authRoutes;
