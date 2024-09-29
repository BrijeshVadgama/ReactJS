const mongoose = require("mongoose");

const travelersSchema = mongoose.Schema({
  BookingID: {
    type: Number,
    unique: true,
  },
  TravelerName: {
    type: String,
    required: true,
  },
  Destination: {
    type: String,
    required: true,
  },
  DepartureDate: {
    type: Date,
    required: true,
  },
  ReturnDate: {
    type: Date,
    required: true,
  },
});

const Travelers = mongoose.model("Travelers", travelersSchema);

module.exports = Travelers;
