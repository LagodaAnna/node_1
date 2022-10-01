const express = require("express");
const cors = require("cors");
const morgan = require("morgan");

const app = express();

const format = app.get("env") === "development" ? "dev" : "short";

app.use(express.json());

app.use(cors());

app.use(morgan(format));

app.get("/", (req, res) => {
  res.send("All right!");
});

module.exports = app;