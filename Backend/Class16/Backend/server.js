require("dotenv").config();
const app = require("./src/App");
const connectToDb = require("./src/config/database");
connectToDb()
app.listen(3000, () => {
  console.log("Server is Start at Port no : 3000");
});
