const express = require("express");
const {
  getSongs,
  getOneSong,
  createSong,
  removeSong,
  editSong,
  editSongFavorite,
} = require("../controllers/songs");

const router = express.Router();

router.get("/", getSongs);

router.get("/:id", getOneSong);

router.post("/", createSong);

router.delete("/:id", removeSong);

router.put("/:id", editSong);

router.patch("/:id/favorite", editSongFavorite);

module.exports = router;
