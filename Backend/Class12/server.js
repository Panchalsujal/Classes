require("dotenv").config();
const app = require("./src/App");
const express = require("express");
const connectToDb = require("./src/config/database");
app.use(express.json());
connectToDb();
app.listen(3000, () => {
  console.log("Connected to Server ");
});
