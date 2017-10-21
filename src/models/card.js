const mongoose = require('mongoose');

const cardSchema = mongoose.Schema({
  cardTitle: { type: String, unique: true },
  description: String,
  dueDate: String,
  // idCardGroup: {
  //   type: mongoose.Schema.Types.ObjectId,
  //   ref: 'CardGroup',
  // },
  // position: Number,
});

module.exports = mongoose.model('Card', cardSchema);