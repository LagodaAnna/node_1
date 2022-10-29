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
      index: true,
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

const updateSchema = Joi.object({
  title: Joi.string(),
  singer: Joi.string(),
  date: Joi.date(),
  favorite: Joi.boolean(),
}).min(1);

const favoriteSchema = Joi.object({
  favorite: Joi.boolean().required(),
});

const schemas = { addSchema, idSchema, updateSchema, favoriteSchema };

const Song = model("song", songSchema);

module.exports = {
  Song,
  schemas,
};
