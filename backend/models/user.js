const mongoose = require("mongoose");
const { number, boolean, string } = require("zod");

// require schema
const { Schema, model } = mongoose;

// create schema
const userSchema = new Schema({
  nom: {
    type: String,
    required: true,
  },
  prenom: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  ville: {
    type: String,
    required: true,
  },
  telephone: {
    type: Number,
    required: true,
  },
  age: {
    type: Number,   
  },
  genre: {
    type: String,
  },
  regime: {
    type: String,
  },
  restriction: {
    type: String,
  },
  platsfavoris: {
    type: String,
  },
  offre: {
    type: Boolean,
  },
  allergies: {
    type: String,
  },
  recommandations: {
    type: Boolean,
  },
  comment: {
    type: String,
  },
  //   needsAdditionalInfo: {
  //     type: Boolean,
  //     default: true,
  // },
});

module.exports = mongoose.model("user", userSchema);
