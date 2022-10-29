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

const getOneSong = async (req, res) => {
  const { id } = req.params;
  const oneSong = await getOneSongService(id);
  oneSong ? res.json(oneSong) : res.status(404).json({ message: "Not found" });
};

const createSong = async (req, res) => {
  const { body } = req;
  const newSong = await createSongService(body);
  res.status(201).json(newSong);
};

const removeSong = async (req, res) => {
  const { id } = req.params;
  const currentSong = await removeSongService(id);
  currentSong
    ? res.json(currentSong)
    : res.status(404).json({ message: "Not found" });
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
