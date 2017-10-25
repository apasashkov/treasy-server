const mongoose = require('mongoose');

const cardSchema = mongoose.Schema({
  cardTitle: { type: String, unique: true },
  description: String,
  dueDate: Number,
});

module.exports = mongoose.model('Card', cardSchema);
