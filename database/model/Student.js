const mongoose = require("mongoose");
const { date, array } = require("@hapi/joi");
const Schema = mongoose.Schema;
const Student = new Schema({
  date: { type: Date, default: Date.now() },
  parentName: Object,
  studentName: Object,
  address: Object,
  email: String,
  level: String,
  subjects: Array,
  department: String,
  phoneNumber: Number,
});
module.exports = mongoose.model("Student", Student);
