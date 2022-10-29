const express = require("express");
const {
  getSongs,
  getOneSong,
  createSong,
  removeSong,
  editSong,
  editSongFavorite,
} = require("../controllers/songs");

const validator = require("../middlewares/validation");

const { schemas } = require("../models/song");

const wrapper = require("../helpers/wrapper");

const router = express.Router();

router.get("/", wrapper(getSongs));

router.get("/:id", validator.params(schemas.idSchema), wrapper(getOneSong));

router.post("/", validator.body(schemas.addSchema), wrapper(createSong));

router.delete("/:id", validator.params(schemas.idSchema), wrapper(removeSong));

router.put("/:id", wrapper(editSong));

router.patch("/:id/favorite", wrapper(editSongFavorite));

module.exports = router;
