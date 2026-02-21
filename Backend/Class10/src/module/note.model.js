const mongoose = require("mongoose");

const NoteSchema = new mongoose.Schema({
  name: String,
  email: {
    type: String,
    unique: [true, "Give Email is Already Exit"],
  },
  password: String,
});

const NoteModel = mongoose.model("token", NoteSchema);

module.exports = NoteModel;
