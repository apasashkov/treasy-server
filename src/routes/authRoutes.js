const express = require('express');
const authController = require('../controllers/authController');

const router = new express.Router();

router.post('/api/register', authController.register);
router.post('/api/login', authController.login);

module.exports = router;

