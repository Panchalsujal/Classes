const mongoose = require("mongoose");

function connectToDb() {
  mongoose
    .connect(
      "mongodb+srv://sujalpanchal249_db_user:khygeZllebqeFrBu@cluster0.0xrazsl.mongodb.net/notes-1",
    )
    .then(() => {
      console.log("Connect To Db");
    });
}
module.exports = connectToDb;
