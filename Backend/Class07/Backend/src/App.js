const express = require("express");
const app = express();
const mongoose = require("mongoose");
const noteModel = require("./models/note.model.js");
app.use(express.json());
app.post("/notes", async (req, res) => {
  const { title, discription } = req.body;
  const note = await noteModel.create({
    title,
    discription,
  });
  res.status(200).json({
    massage: "Note Create Successfully",
    note,
  });
});

app.get("/notes", async (req, res) => {
  const note = await noteModel.find();

  res.status(200).json({
    massage: "All Notes Fatched",
    note,
  });
});
module.exports = app;
