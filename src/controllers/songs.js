const requestError = require("../helpers/requestError");

const Song = require("../models/song");

const getSongs = async (req, res) => {
  throw requestError(404, "Not found");
  res.sendStatus(200);
};

const getOneSong = async (req, res) => {
  res.sendStatus(230);
};

const createSong = async (req, res) => {
  const createdSong = await Song.create(req.body);
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
