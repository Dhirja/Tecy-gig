const mongoose = require("mongoose");

const jobSchema = new mongoose.Schema({
  position: {
    type: String,
    required: true,
    trim: true,
  },
  experience: {
    type: String,
    required: true,
    trim: true,
  },
  openings: {
    type: String,
    required: true,
    trim: true,
  },
});

const Job = mongoose.model("Job", jobSchema);

module.exports = Job;
