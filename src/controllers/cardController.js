const Card = require('../models/card');
const Group = require('../models/cardGroup');

const cardController = {};

cardController.addCard = (req, res) => {
  Group.findById(req.body.groupId)
    .then((foundGroup) => {
      Card.create(req.body.card)
        .then((createdCard) => {
          foundGroup.cards.push(createdCard);
          foundGroup.save();
          res.status(200).json(createdCard);
        })
        .catch((err) => {
          console.log(err);
          res.sendStatus(500);
        });
    })
    .catch((err) => {
      console.log(err);
      res.sendStatus(500);
    });
};

cardController.editCard = (req, res) => {
  Card.findOneAndUpdate({ _id: req.params.id }, req.body)
    .then(() => {
      res.sendStatus(200);
    })
    .catch((err) => {
      console.log(err);
      res.sendStatus(500);
    });
};

cardController.removeCard = (req, res) => {
  Card.findByIdAndRemove(req.query.id)
    .then(() => {
      res.sendStatus(200);
    })
    .catch((err) => {
      console.log(err);
      res.sendStatus(500);
    });
};

module.exports = cardController;
