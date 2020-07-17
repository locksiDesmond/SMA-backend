const express = require("express");
const cors = require("cors");
const app = express();
const dotenv = require("dotenv").config();
const PORT = process.env.PORT;
var corsOptions = {
  origin: "http://localhost:3000",
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
};
app.use(cors(corsOptions));

app.use(express.json());
app.get("/", (req, res) => {
  res.send(
    "Hello world, this is the home page of SMA. you should send a post request to '/' with your data "
  );
});
app.post("/", (req, res) => {
  const body = req.body;
  res.json({ body });
});
app.listen(PORT, () => console.log(`listening on port ${PORT}`));
