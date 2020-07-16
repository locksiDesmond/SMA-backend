const express = require("express");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT;
app.use(cors());
app.use(express.json());
app.post("/", (req, res) => {
  const body = req.body;
  res.send({ body });
});
app.listen(PORT);
