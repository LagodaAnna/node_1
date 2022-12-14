const { Song } = require("../models/song");

const getSongsService = async (filter = "") => {
  const filteredArr = filter.split("|");
  const [, title = "", , favorite = [false, true]] = filteredArr;
  const result = await Song.find({
    title: { $regex: new RegExp(title, "i") },
    favorite,
  });
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

const editSongService = async (id, song) => {
  const result = await Song.findByIdAndUpdate(id, song, { new: true });
  return result;
};

const editSongFavoriteService = async (id, body) => {
  const result = await Song.findByIdAndUpdate(id, body, { new: true });
  return result;
};

module.exports = {
  getSongsService,
  getOneSongService,
  createSongService,
  removeSongService,
  editSongService,
  editSongFavoriteService,
};
