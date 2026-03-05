const express = require("express");
const router = express.Router();
const songController = require("../controllers/song.controller");
const upload = require("../middlewares/upload.middleware");
router.post("/", upload.single("song"), songController.controllerSong);
router.get("/", songController.getSongController);
module.exports = { router };
