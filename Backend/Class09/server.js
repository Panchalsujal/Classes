const app = require("./src/App.js");

const connectToDb = require("./src/config/database.js");
connectToDb();
app.listen(3000, () => {
  console.log("Server is Running at Port:3000");
});
