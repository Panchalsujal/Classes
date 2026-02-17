const express = require("express");
const app = express();
app.use(express.json());
const notemodel = require("./models/notes.model.js");
app.post("/note", async (req, res) => {
  const { title, description } = req.body;

  const note = await notemodel.create({
    title,
    description,
  });

  res.status(201).json({
    massage: "Note Created",
    note,
  });
});

app.get("/note", async (req, res) => {
  const note = await notemodel.find();

  console.log(note);
  
  res.status(201).json({
    massage: "Notes Fetched",
    note,
  });
});


// app.delete("/note/:index", async (req, res) => {
//   const note = await notemodel.find();

//   res.status(201).json({
//     massage: "Notes Fetched",
//     note,
//   });
// });

module.exports = app;
