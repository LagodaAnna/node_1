const {
  getSongsService,
  getOneSongService,
  createSongService,
  removeSongService,
  editSongService,
  editSongFavoriteService,
} = require("../services/songs");

const getSongs = async (req, res) => {
  const songs = await getSongsService();
  res.json(songs);
};

//TODO: add validation for params id

const getOneSong = async (req, res) => {
  const { id } = req.params;
  const oneSong = await getOneSongService(id);
  oneSong ? res.json(oneSong) : res.status(404).json({ message: "Not found" });
};

const createSong = async (req, res) => {
  res.status(201).json(createdSong);
};

const removeSong = async (req, res) => {
  res.sendStatus(231);
};

const editSong = async (req, res) => {
  res.sendStatus(232);
};

const editSongFavorite = async (req, res) => {
  res.sendStatus(233);
};

module.exports = {
  getSongs,
  getOneSong,
  createSong,
  removeSong,
  editSong,
  editSongFavorite,
};
