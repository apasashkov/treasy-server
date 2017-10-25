const express = require('express');
const cardController = require('../controllers/cardController');
const authCheckMiddleware = require('../middleware/auth-check');

const router = new express.Router();

router.post('/api/cards', authCheckMiddleware, cardController.addCard);
router.post('/api/cards/:id', authCheckMiddleware, cardController.editCard);
router.delete('/api/cards/', authCheckMiddleware, cardController.removeCard);

module.exports = router;
