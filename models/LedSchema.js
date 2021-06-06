const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const LedSchema = new Schema({
  isOn: {
    type: Boolean,
    required: true,
  },
  color: {
    r: Number,
    g: Number,
    b: Number,
  },
  light: {
    type: Number,
    required: true,
  },
});

const Led = mongoose.model("Led", LedSchema);
module.exports = Led;
