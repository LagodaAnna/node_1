const Song = require("../models/song");

const getSongsService = async () => {
  const result = await Song.find();
  return result;
};

const getOneSongService = async (id) => {
  const result = await Song.findById(id);
  return result;
};

const createSongService = async () => {};

const removeSongService = async () => {};

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
