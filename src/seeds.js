const Card = require('./models/card');
const CardGroup = require('./models/cardGroup');

const cardsData = [
  [
  {
    title: 'Get laundry',
    description: 'Hexagon marfacenester, pork belly celiacalvia yr bushwick meggings flannel austin vexillologist. Food truck narwhal cred, celiac hoodie roof party lo-fi irony ugh fashion axe kogi organic taxidermy hexagon occupy.',
    dueDate: 9231232,
  },
  {
    title: 'Walk my dog',
    description: 'Hexagon marfacenester, pork belly celiacalvia yr bushwick meggings flannel austin vexillologist. Food truck narwhal cred, celiac hoodie roof party lo-fi irony ugh fashion axe kogi organic taxidermy hexagon occupy.',
    dueDate: 9231232,
  },
  {
    title: 'Shop for groceries',
    description: 'Hexagon marfacenester, pork belly celiacalvia yr bushwick meggings flannel austin vexillologist. Food truck narwhal cred, celiac hoodie roof party lo-fi irony ugh fashion axe kogi organic taxidermy hexagon occupy.',
    dueDate: 9231232,
  },
  ],
  [
  {
    title: 'Learn playing violin',
    description: 'Hexagon marfacenester, pork belly celiacalvia yr bushwick meggings flannel austin vexillologist. Food truck narwhal cred, celiac hoodie roof party lo-fi irony ugh fashion axe kogi organic taxidermy hexagon occupy.',
    dueDate: 9231232,
  },
  {
    title: 'Have coffe with friends',
    description: 'Hexagon marfacenester, pork belly celiacalvia yr bushwick meggings flannel austin vexillologist. Food truck narwhal cred, celiac hoodie roof party lo-fi irony ugh fashion axe kogi organic taxidermy hexagon occupy.',
    dueDate: 9231232,
  },
  {
    title: 'Go to the theatre',
    description: 'Hexagon marfacenester, pork belly celiacalvia yr bushwick meggings flannel austin vexillologist. Food truck narwhal cred, celiac hoodie roof party lo-fi irony ugh fashion axe kogi organic taxidermy hexagon occupy.',
    dueDate: 9231232,
  },
  ],
  [
  {
    title: 'Visit dentist',
    description: 'Hexagon marfacenester, pork belly celiacalvia yr bushwick meggings flannel austin vexillologist. Food truck narwhal cred, celiac hoodie roof party lo-fi irony ugh fashion axe kogi organic taxidermy hexagon occupy.',
    dueDate: 9231232,
  },
  {
    title: 'Japan vacation',
    description: 'Hexagon marfacenester, pork belly celiacalvia yr bushwick meggings flannel austin vexillologist. Food truck narwhal cred, celiac hoodie roof party lo-fi irony ugh fashion axe kogi organic taxidermy hexagon occupy.',
    dueDate: 9231232,
  },
  {
    title: 'Buy new sofa',
    description: 'Hexagon marfacenester, pork belly celiacalvia yr bushwick meggings flannel austin vexillologist. Food truck narwhal cred, celiac hoodie roof party lo-fi irony ugh fashion axe kogi organic taxidermy hexagon occupy.',
    dueDate: 9231232,
  },
  ],
];

const groupsData = [
  { title: 'Backlog' },
  { title: 'In progress' },
  { title: 'Done' },
];


const seedInner = () => {
  CardGroup.create(groupsData)
    .then(() => {
    })
    .catch((err) => {
      console.log(err);
    });
};

const seedDb = () => {
  CardGroup.count((err, count) => {
    if (!err && count === 0) {
      seedInner();
    }
  });
};

module.exports = seedDb;
