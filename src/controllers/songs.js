const {
  getSongsService,
  getOneSongService,
  createSongService,
  removeSongService,
  editSongService,
  editSongFavoriteService,
} = require("../services/songs");

const getSongs = async (req, res) => {
  const { filter } = req.query;

  const songs = await getSongsService(filter);
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
  const { id } = req.params;
  const { body } = req;
  const editedSong = await editSongService(id, body);
  editedSong
    ? res.json(editedSong)
    : res.status(404).json({ message: "Not found" });
};

const editSongFavorite = async (req, res) => {
  const { id } = req.params;
  const { body } = req;
  const editedSong = await editSongFavoriteService(id, body);
  editedSong
    ? res.json(editedSong)
    : res.status(404).json({ message: "Not found" });
};

module.exports = {
  getSongs,
  getOneSong,
  createSong,
  removeSong,
  editSong,
  editSongFavorite,
};
