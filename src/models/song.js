const { Schema, model } = require("mongoose");

const songSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      index: true,
    },
    singer: {
      type: String,
      default: "Unknow",
    },
    date: {
      type: Date,
      required: true,
    },
    favorite: {
      type: Boolean,
      default: false,
    },
  },
  { versionKey: false, timestamps: true }
);

const Song = model("song", songSchema);

module.exports = Song;
