const mongoose = require('mongoose');

const cardSchema = mongoose.Schema({
  cardTitle: { type: String, unique: true },
  description: String,
  dueDate: Number,
  groupId: mongoose.Schema.Types.ObjectId,
});

module.exports = mongoose.model('Card', cardSchema);
