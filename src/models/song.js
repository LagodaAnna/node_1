const { Schema, model } = require("mongoose");
const Joi = require("joi");
Joi.objectId = require("joi-objectid")(Joi);

const songSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      index: true,
    },
    singer: {
      type: String,
      default: "Unknown",
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

const addSchema = Joi.object({
  title: Joi.string().required(),
  singer: Joi.string(),
  date: Joi.date().required(),
  favorite: Joi.boolean(),
});

const idSchema = Joi.object({
  id: Joi.objectId().required(),
});

const schemas = { addSchema, idSchema };

const Song = model("song", songSchema);

module.exports = {
  Song,
  schemas,
};
