const express = require("express");
const {
  getSongs,
  getOneSong,
  createSong,
  removeSong,
  editSong,
  editSongFavorite,
} = require("../controllers/songs");

const wrapper = require('../helpers/wrapper')

const router = express.Router();

router.get("/", wrapper(getSongs));

router.get("/:id", wrapper(getOneSong));

router.post("/", wrapper(createSong));

router.delete("/:id", wrapper(removeSong));

router.put("/:id", wrapper(editSong));

router.patch("/:id/favorite", wrapper(editSongFavorite));

module.exports = router;
