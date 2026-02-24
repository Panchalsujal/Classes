const followModel = require("../model/follow.model");
const userModel = require("../model/user.model");

async function followUserControllers(req, res) {
  const followserUserName = req.user.username;
  const followeeUserName = req.params.username;

  if (followeeUserName === followserUserName) {
    return res.status(400).json({
      message: "You can not follow Yourself",
    });
  }

  const isUserAlreadyExists = await userModel.findOne({
    username: followeeUserName,
  });

  if (!isUserAlreadyExists) {
    return res.status(404).json({
      message: "user you are trying to follow does not exists",
    });
  }

  const isAlreadyFollow = await followModel.findOne({
    follower: followserUserName,
    followee: followeeUserName,
  });

  if (isAlreadyFollow) {
    return res.status(200).json({
      message: `You already follow ${followeeUserName}`,
      follow: isAlreadyFollow,
    });
  }

  const followRecord = await followModel.create({
    follower: followserUserName,
    followee: followeeUserName,
  });

  res.status(201).json({
    message: `You are following ${followeeUserName}`,
    followRecord,
  });
}

async function unFollowUserControllers(req, res) {
  const followserUserName = req.user.username;
  const followeeUserName = req.params.username;
  const isUserFollowing = await followModel.findOne({
    follower: followserUserName,
    followee: followeeUserName,
  });

  if (!isUserFollowing) {
    return res.status(200).json({
      message: `you are not following ${followeeUserName}`,
    });
  }

  await followModel.findByIdAndDelete(isUserFollowing._id);

  res.status(200).json({
    message: `You have Unfollowed ${followeeUserName}`,
  });
}
module.exports = {
  followUserControllers,
  unFollowUserControllers,
};
