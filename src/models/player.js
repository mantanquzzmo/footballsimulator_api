const mongoose = require("mongoose");

const firstNames = ["Reine", "Gustavo", "Exequiel"];
const surNames = ["Marquinhos", "Gaucho", "Palacios"];

const playerSchema = new mongoose.Schema({
  name: {
    type: String,
    default: () => {
      let fullName = `${firstNames[Math.floor(Math.random() * 3)]} ${
        surNames[Math.floor(Math.random() * 3)]
      }`;
      return fullName;
    },
  },
  age: {
    type: Number,
    default: () => {
      return Math.floor(Math.random() * (37 - 17 + 1) + 17);
    },
  },
  position: { type: String },
  skill: {
    type: Number,
    default: () => {
      return Math.random() * (1 - 10 + 1) + 10;
    },
  },
  form: {
    type: Number,
    default: () => {
      return Math.random() * (1 - 20 + 1) + 20;
    },
  },
  formTendency: {
    type: Number,
    default: () => {
      return Math.random() * (1 - 5 + 1) + 5;
    },
  },
  team: { type: String },
});

const playerModel = new mongoose.model("Player", playerSchema);

module.exports = playerModel;
