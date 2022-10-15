require("dotenv").config();

const { DB_URL = '', PORT = 3333 } = process.env;

module.exports = { PORT, DB_URL };
