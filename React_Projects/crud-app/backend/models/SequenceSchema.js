const mongoose = require("mongoose");

const SequenceSchema = new mongoose.Schema({
  model: { type: String, required: true },
  seq: { type: Number, default: 0 },
});

module.exports = mongoose.model("Sequence", SequenceSchema);
