const mongoose = require("mongoose");
require("dotenv").config();
const url = process.env.url || "mongodb://localhost/test";
mongoose
  .connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("connected to the database"))
  .catch((err) => {
    console.log(err);
  });