const User = require('../Models/User');
const Transaction = require('../Models/Transaction');

exports.addMoney = async (req, res) => {
    const { amount } = req.body;
    const user = req.user;

    user.balance += amount;
    await user.save();

    await Transaction.create({
        sender: null,
        receiver: user._id,
        amount,
        type: "CREDIT"
    });

    res.json({ msg: "Money added", balance: user.balance });
};

exports.sendMoney = async (req, res) => {
    const { toEmail, amount } = req.body;
    const sender = req.user;
    const receiver = await User.findOne({ email: toEmail });

    if (!receiver) return res.status(404).json({ msg: "Receiver not found" });
    if (sender.balance < amount) return res.status(400).json({ msg: "Insufficient funds" });

    sender.balance -= amount;
    receiver.balance += amount;

    await sender.save();
    await receiver.save();

    await Transaction.create([
        {
            sender: sender._id,
            receiver: receiver._id,
            amount,
            type: "DEBIT"
        },
        {
            sender: sender._id,
            receiver: receiver._id,
            amount,
            type: "CREDIT"
        }
    ]);

    res.json({ msg: `₹${amount} sent to ${receiver.email}`, balance: sender.balance });
};
