require("dotenv").config();
const mongoose = require("mongoose");

function ConnectTODB() {
  mongoose.connect(process.env.MONGO_URI).then(()=>{
     console.log("Connect To Db");
  })
 
}

module.exports=ConnectTODB
