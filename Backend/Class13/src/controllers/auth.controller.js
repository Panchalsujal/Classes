const userModel = require("../model/user.model");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

async function registerController(req, res) {
  const { username, email, password, bio, profilepicture } = req.body;
  const isUserAlreadyExists = await userModel.findOne({
    $or: [{ email }, { username }],
  });
  if (isUserAlreadyExists) {
    return res.status(409).json({
      massage:
        "User alredy exists" +
        (isUserAlreadyExists.email === email
          ? "email is already exist"
          : "Username already exists"),
    });
  }
  const hash = await bcrypt.hash(password, 10);
  const user = userModel.create({
    username,
    email,
    password: hash,
    bio,
    profilepicture,
  });
  const token = jwt.sign(
    {
      id: user._id,
    },
    process.env.JWT_SECRET,
    {
      expiresIn: "1d",
    },
  );
  res.cookie("token", token);
  res.status(201).json({
    message: "User Registered successfully",
    user: {
      email: (await user).email,
      username: (await user).username,
      bio: (await user).bio,
      profilepicture: (await user).profilepicture,
    },
  });
}

async function loginController(req, res) {
  const { username, email, password } = req.body;
  const user = await userModel.findOne({
    $or: [
      {
        username: username,
      },
      {
        email: email,
      },
    ],
  });

  if (!user) {
    return res.status(404).json({
      message: "user not found",
    });
  }
  const isPasswordvalid = await bcrypt.compare(password, user.password);
  if (!isPasswordvalid) {
    return res.status(401).json({
      message: "Password invaild",
    });
  }
  const token = jwt.sign(
    {
      id: user._id,
    },
    process.env.JWT_SECRET,
    { expiresIn: "1d" },
  );

  res.cookie("token", token);
  res.status(201).json({
    message: "User loggedIn successfully",
    user: {
      email: (await user).email,
      username: (await user).username,
      bio: (await user).bio,
      profilepicture: (await user).profilepicture,
    },
  });
}

module.exports = {
  loginController,
  registerController,
};
