const { Song } = require("../models/song");

const getSongsService = async () => {
  const result = await Song.find();
  return result;
};

const getOneSongService = async (id) => {
  const result = await Song.findById(id);
  return result;
};

const createSongService = async (song) => {
  const result = await Song.create(song);
  return result;
};

const removeSongService = async (id) => {
  const result = await Song.findByIdAndRemove(id);
  return result;
};

const editSongService = async () => {};

const editSongFavoriteService = async () => {};

module.exports = {
  getSongsService,
  getOneSongService,
  createSongService,
  removeSongService,
  editSongService,
  editSongFavoriteService,
};
