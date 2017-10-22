const express = require('express');
const groupController = require('../controllers/groupController');
const authCheckMiddleware = require('../middleware/auth-check');

const router = express.Router();

router.get('/api/groups', groupController.getAllGroups);
router.post('/api/groups', groupController.addGroup);
router.post('/api/groups/:id', groupController.editGroup);
router.delete('/api/groups/', groupController.removeGroup);

// router.get('/api/groups', groupController.getAllGroups);
// router.post('/api/groups', authCheckMiddleware, groupController.addGroup);
// router.post('/api/groups/:id', authCheckMiddleware, groupController.editGroup);
// router.delete('/api/groups/:id', authCheckMiddleware, groupController.removeGroup);

module.exports = router;
