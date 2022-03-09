const mongoose = require('mongoose');

const PredictionSchema = new mongoose.Schema({
  boot: String,
  second: String,
  third: String,
  fourth: String,
  fifth: String,
  flag: String,
  updated_date: {
    type: Date,
    default: Date.now
  },
  owner: {
    type: String,
    // required: true
  },
});

const Prediction = mongoose.model('Prediction', PredictionSchema);

module.exports = Prediction