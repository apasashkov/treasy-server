const Card = require('./models/card');
const CardGroup = require('./models/cardGroup');
const User = require('./models/user');

const cardsData = [
  [
    {
      title: 'Get laundry',
      description: 'Hexagon marfacenester, pork belly celiacalvia yr bushwick meggings flannel austin vexillologist. Food truck narwhal cred, celiac hoodie roof party lo-fi irony ugh fashion axe kogi organic taxidermy hexagon occupy.',
      dueDate: '2017-12-17',
    },
    {
      title: 'Walk my dog',
      description: 'Hexagon marfacenester, pork belly celiacalvia yr bushwick meggings flannel austin vexillologist. Food truck narwhal cred, celiac hoodie roof party lo-fi irony ugh fashion axe kogi organic taxidermy hexagon occupy.',
      dueDate: '2017-10-21',
    },
    {
      title: 'Shop for groceries',
      description: 'Hexagon marfacenester, pork belly celiacalvia yr bushwick meggings flannel austin vexillologist. Food truck narwhal cred, celiac hoodie roof party lo-fi irony ugh fashion axe kogi organic taxidermy hexagon occupy.',
      dueDate: '2017-10-28',
    },
  ],
  [
    {
      title: 'Learn playing violin',
      description: 'Hexagon marfacenester, pork belly celiacalvia yr bushwick meggings flannel austin vexillologist. Food truck narwhal cred, celiac hoodie roof party lo-fi irony ugh fashion axe kogi organic taxidermy hexagon occupy.',
      dueDate: '2019-10-01',
    },
    {
      title: 'Have coffe with friends',
      description: 'Hexagon marfacenester, pork belly celiacalvia yr bushwick meggings flannel austin vexillologist. Food truck narwhal cred, celiac hoodie roof party lo-fi irony ugh fashion axe kogi organic taxidermy hexagon occupy.',
      dueDate: '2017-11-21',
    },
    {
      title: 'Go to the theatre',
      description: 'Hexagon marfacenester, pork belly celiacalvia yr bushwick meggings flannel austin vexillologist. Food truck narwhal cred, celiac hoodie roof party lo-fi irony ugh fashion axe kogi organic taxidermy hexagon occupy.',
      dueDate: '2017-12-13',
    },
  ],
  [
    {
      title: 'Visit dentist',
      description: 'Hexagon marfacenester, pork belly celiacalvia yr bushwick meggings flannel austin vexillologist. Food truck narwhal cred, celiac hoodie roof party lo-fi irony ugh fashion axe kogi organic taxidermy hexagon occupy.',
      dueDate: '2018-02-04',
    },
    {
      title: 'Japan vacation',
      description: 'Hexagon marfacenester, pork belly celiacalvia yr bushwick meggings flannel austin vexillologist. Food truck narwhal cred, celiac hoodie roof party lo-fi irony ugh fashion axe kogi organic taxidermy hexagon occupy.',
      dueDate: '2018-07-12',
    },
    {
      title: 'Buy new sofa',
      description: 'Hexagon marfacenester, pork belly celiacalvia yr bushwick meggings flannel austin vexillologist. Food truck narwhal cred, celiac hoodie roof party lo-fi irony ugh fashion axe kogi organic taxidermy hexagon occupy.',
      dueDate: '2018-12-21',
    },
  ],
];

const groupsData = [
  { title: 'backlog' },
  { title: 'in_progress' },
  { title: 'done' },
];

const userData = [
  { login: 'carrot', password: 'carrot' },
  { login: 'potato', password: 'potato' },
];

const seedDb = () => {
  groupsData.forEach((cardGroup, i) => {
    CardGroup.create(cardGroup, (err, createdCardGroup) => {
      if (err) {
        console.log(err);
      } else {
        Card.create(cardsData[1][i], (error, createdCard) => {
          if (error) {
            console.log(error);
          } else {
            createdCardGroup.cards.push(createdCard);
            createdCardGroup.save();
          }
        });
      }
    });
  });

  userData.forEach((user) => {
    User.create(user)
      .catch((err) => {
        console.log(err);
      });
  });
};

module.exports = seedDb;
