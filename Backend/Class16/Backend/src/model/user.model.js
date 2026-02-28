const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    unique: [true, "Username is already exists"],
    required: [true, "User name is required"],
  },
  email: {
    type: String,
    unique: [true, "email already exists"],
    required: [true, "email is required"],
  },
  password: {
    type: String,
    required: [true, "email is required"],
    select: false,
  },
  bio: String,
  profilepicture: {
    type: String,
    default:
      "https://imgs.search.brave.com/7XKV5ppMMzcehc7v2V9P8mPHJTh4XXXy5n3fDHhdxps/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9jZG4u/dmVjdG9yc3RvY2su/Y29tL2kvNTAwcC80/MS85MC9hdmF0YXIt/ZGVmYXVsdC11c2Vy/LXByb2ZpbGUtaWNv/bi1zaW1wbGUtZmxh/dC12ZWN0b3ItNTcy/MzQxOTAuanBn",
  },
});

const userModel = mongoose.model("userinfo", userSchema);

module.exports = userModel;
