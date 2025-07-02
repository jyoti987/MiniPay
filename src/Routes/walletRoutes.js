const express = require('express');
const router = express.Router();
const { addMoney, sendMoney } = require('../Controllers/walletController');
const authMiddleware = require('../middlewares/authMiddleware');
const limiter = require('../middlewares/rateLimiter');

router.post('/add', authMiddleware, addMoney);
router.post('/send', authMiddleware, limiter, sendMoney);

module.exports = router;
