const express = require('express');
const router = express.Router();
const { getTransactions } = require('../Controllers/transactionController');
const protect = require('../middlewares/authMiddleware');

router.get('/', protect, getTransactions);

module.exports = router;
