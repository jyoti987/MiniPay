const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');


dotenv.config(); 
const app = express();

app.use(cors());
app.use(express.json());

// Routes
app.use("/api/auth", require('./Routes/authRoute'));
app.use("/api/wallet", require('./Routes/walletRoutes')); 
app.use("/api/transactions", require('./Routes/transactionRoutes'));


mongoose.connect("mongodb+srv://riju:riju@cluster0.s4hmv.mongodb.net/minipay")
    .then(() => { console.log("mongo connected")
    })
    .catch(err => console.log("Mongo Error:", err));

 const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:5000`);
});