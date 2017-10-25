const mongoose = require('mongoose');

const cardGroupSchema = mongoose.Schema({
  title: { type: String, unique: true },
  cards: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Card',
  }],
});

module.exports = mongoose.model('CardGroup', cardGroupSchema);
