const mongoose = require("mongoose");

const app = require("./src/app");

const { DB_URL, PORT } = require('./src/config');

mongoose
  .connect(DB_URL)
  .then(() =>
    app.listen(PORT, () => {
      console.log("Database connection successful");
    })
  )
  .catch((error) => {
    console.log(error.message);
    process.exit(1);
  });
