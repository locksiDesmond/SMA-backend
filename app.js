const express = require("express");
const app = express();
const dotenv = require("dotenv").config();
const Joi = require("@hapi/joi");
const cors = require("cors");
const PORT = process.env.PORT;
// const connection = require("./database/connection");
// const Student = require("./database/model/Student");
var corsOptions = {
  origin: "http://localhost:3000",
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
};

app.use(express.json());
app.use(cors(corsOptions));
app.get("/", (req, res) => {
  res.send(
    "Hello world, this is the home page of SMA. you should send a post request to '/' with your data "
  );
});
app.post("/", (req, res) => {
  const body = req.body;
  const schema = Joi.object({
    parentName: Joi.object({
      firstname: Joi.string().required(),
      lastname: Joi.string().required(),
    }),
    email: Joi.string().email().required(),
    studentName: Joi.object({
      firstname: Joi.string().required(),
      lastname: Joi.string().required(),
    }),
    phoneNumber: Joi.number().required(),
    address: Joi.object({
      address: Joi.string().required(),
      city: Joi.string().required(),
    }),
  });
  const { error } = schema.validate(body);
  if (error) {
    res.json({ error });
  } else {
    res.json({ authorized: true });
  }
});
app.post("/done", (req, res) => {
  const schema = Joi.object({
    level: Joi.string().required(),
    department: Joi.string(),
    subjects: Joi.array().required(),
    parentName: Joi.object({
      firstname: Joi.string().required(),
      lastname: Joi.string().required(),
    }),
    email: Joi.string().email().required(),
    studentName: Joi.object({
      firstname: Joi.string().required(),
      lastname: Joi.string().required(),
    }),
    phoneNumber: Joi.number().required(),
    address: Joi.object({
      address: Joi.string().required(),
      city: Joi.string().required(),
    }),
  });
  const { error } = schema.validate(req.body);
  if (error) {
    res.json({ error });
  } else {
    Student.create(body, (err, data) => {
      if (err) throw err;
      if (data) {
        res.json({ message: "completed" });
      }
    });
  }
});
app.get("/students", (req, res) => {
  Student.find({}, (err, data) => {
    if (err) throw err;
    if (data) {
      res.json({ data });
    }
  });
});
app.listen(PORT, () => console.log(`listening on port ${PORT}`));
