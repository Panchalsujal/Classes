const app = require("./src/App");
const ConnectTODB = require("./src/config/noteDatabase");
ConnectTODB();

app.listen(3000, () => {
  console.log("Server is Started At Port : 3000");
});
