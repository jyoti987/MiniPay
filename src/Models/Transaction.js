const mongoose = require('mongoose');

const transactionSchema = new mongoose.Schema({
    sender: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    receiver: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    amount: Number,
    type: { type: String, enum: ['CREDIT', 'DEBIT'], required: true }
}, { timestamps: true });

module.exports = mongoose.model('Transaction', transactionSchema);
