const mongoose = require("mongoose");

const experienceSchema = new mongoose.Schema({
  title: { type: String, required: true },
  location: { type: String, required: true },
  price: { type: Number, required: true },
  image: { type: String, required: true },
  description: { type: String },
});

module.exports = mongoose.model("Experience", experienceSchema);
