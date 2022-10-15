const getSongs = async (req, res) => {
  res.sendStatus(200);
};

const getOneSong = async (req, res) => {
  res.sendStatus(230);
};

const createSong = async (req, res) => {
  res.sendStatus(201);
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
