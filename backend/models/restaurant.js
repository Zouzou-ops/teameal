const mongoose = require("mongoose");

// require schema
const { Schema, model } = mongoose;

// create schema
const restaurantSchema = new Schema({
  nom: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  adresse: {
    type: String,
    required: true,
  },
  telephone: {
    type: Number,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("restaurant", restaurantSchema);
