const Group = require('../models/cardGroup');

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
  Group.findOneAndUpdate({ _id: req.params.id }, req.body)
    .then(() => {
      res.sendStatus(200);
    })
    .catch((err) => {
      console.log(err);
      res.sendStatus(500);
    });
};

groupController.removeGroup = (req, res) => {
  Group.findByIdAndRemove(req.query.id)
    .then(() => {
      res.sendStatus(200);
    })
    .catch((err) => {
      console.log(err);
      res.sendStatus(500);
    });
};

module.exports = groupController;

