const mongoose = require("mongoose");
const dotenv = require("dotenv").config();
mongoose.connect(process.env.URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
});
const db = mongoose.connection;
db.on("error", (err) => {
  console.log(err);
});
db.on("connected", () => {
  console.log("database connected");
});
module.exports = db;
