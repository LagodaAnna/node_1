const express = require("express");
const cors = require("cors");
const morgan = require("morgan");

const songsRouter = require("./routes/songs");

const app = express();

const format = app.get("env") === "development" ? "dev" : "short";

app.use(express.json());

app.use(cors());

app.use(morgan(format));

app.use("/api/songs", songsRouter);

app.use((_, res) => {
  res.status(404).json({ message: "Not found" });
});

app.use((error, _, res, __) => {
  const { status = 500, message = "Internal server error" } = error;
  res.status(status).json(message);
});

module.exports = app;
