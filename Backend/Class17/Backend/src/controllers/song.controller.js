const songModel = require("../models/song.model");
const id3 = require("node-id3");
const stroageService = require("../services/storage.service");

async function controllerSong(req, res) {
  const { mood } = req.body;
  const songBuffer = req.file.buffer;
  const tags = id3.read(songBuffer);

  const [songFile, prosterFile] = await Promise.all([
    stroageService.uploadFile({
      buffer: songBuffer,
      filename: tags.title + ".mp3",
      folder: "/moodify/songs",
    }),
    stroageService.uploadFile({
      buffer: tags.image.imageBuffer,
      filename: tags.title + ".jpeg",
      folder: "/moodify/poster",
    }),
  ]);

  const song = await songModel.create({
    title: tags.title,
    url: songFile.url,
    posterUrl: prosterFile.url,
    mood: mood,
  });

  res.status(201).json({
    message: "Song created successfully",
    song,
  });
}

async function getSongController(req, res) {
  const { mood } = req.query;
  const song = await songModel.findOne({
    mood,
  });
  res.status(200).json({
    message: "Song Fected Successfully",
    song,
  });
}

module.exports = {
  controllerSong,
  getSongController,
};
