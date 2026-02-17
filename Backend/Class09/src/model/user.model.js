const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: String,
  email: {
    type: String,
    unique: [true, "With this Email user Already Exists"],
  },
  password: String,
});

const userModel = mongoose.model("UserData", userSchema);

module.exports = userModel;
