const express = require("express");
const app = express();
app.use(express.json());

const notes = [];
app.post("/notes", (req, res) => {
  res.send("Add to Arry");
  notes.push(req.body);
});
app.get("/notes", (req, res) => {
  res.send(notes);
});

app.delete("/notes/:index", (req, res) => {
  delete notes[req.params.index];

  res.status(202).json({
    massage: "Not deleted successfully",
  });
});

app.patch("/notes/:index", (req, res) => {
  notes[req.params.index].content = req.body.content;

  res.status(200).json({
    massage: "Note Updated successfully",
  });
});

module.exports = app;
