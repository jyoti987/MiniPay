const Transaction = require('../Models/Transaction');

exports.getTransactions = async (req, res) => {
    const { page = 1, limit = 5 } = req.query;
    const skip = (page - 1) * limit;

    const transactions = await Transaction.find({
        $or: [{ sender: req.user._id }, { receiver: req.user._id }]
    })
    .sort({ createdAt: -1 })
    .skip(skip)
    .limit(Number(limit))
    .populate('sender', 'email')
    .populate('receiver', 'email');

    res.json(transactions);
};
