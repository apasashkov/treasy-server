const Card = require('../models/card');
const Group = require('../models/cardGroup');
const mongoose = require('mongoose');

const groupController = {};

groupController.getAllGroups = (req, res) => {
  Group.find({}).populate('cards').exec()
    .then((found) => {
      res.json(found);
    })
    .catch(() => res.sendStatus(500));
};

groupController.addGroup = (req, res) => {
  Group.create(req.body)
    .then((createdGroup) => {
      res.status(200).json(createdGroup);
    })
    .catch((err) => {
      console.log(err);
      res.sendStatus(500);
    });
};

groupController.editGroup = (req, res) => {
  if (req.params.id === 'moveCards') {
  // MOVING CARDS
    Group.find({
      $or: [
        { _id: req.body[0].groupId },
        { _id: req.body[1].groupId },
      ],
    })
      .then((foundGroups) => {
        foundGroups.forEach((group) => {
          for (let i = 0; i < req.body.length; i++) {
            if (group._id.toString() === req.body[i].groupId.valueOf()) {
              group.cards = req.body[i].cards.map(card => mongoose.Types.ObjectId(card));
            }
            group.save();
          }
        });
        res.sendStatus(200);
      })
      .catch((err) => {
        console.log(err);
        res.sendStatus(500);
      });
  } else {
    Group.findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(() => {
        res.sendStatus(200);
      })
      .catch((err) => {
        console.log(err);
        res.sendStatus(500);
      });
  }
};


groupController.removeGroup = (req, res) => {
  Group.findByIdAndRemove(req.query.id)
    .then((removedGroup) => {
      Card.remove({ _id: { $in: removedGroup.cards } })
        .then(() => {
          res.sendStatus(200);
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

module.exports = groupController;

