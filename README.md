# MiniPay

# 💸 MiniPay – Paytm-style Wallet System (Backend Project)

**MiniPay** is a backend-only wallet system inspired by Paytm, built using **Node.js**, **Express**, and **MongoDB**.  
It supports secure user authentication, wallet balance management, money transfer between users, transaction tracking, and rate-limiting to prevent abuse.

---

## 🚀 Tech Stack Used

- Node.js
- Express.js
- MongoDB + Mongoose
- JWT (Authentication)
- bcrypt.js (Password Hashing)
- express-rate-limit (Rate Limiting)
- CORS, dotenv

---

## 🔐 Key Features

- ✅ User Registration & Login (JWT-based)
- ✅ Add money to wallet
- ✅ Send money to another user
- ✅ View transaction history (DEBIT / CREDIT)
- ✅ Rate limiter: Max 5 send requests per minute
- ✅ Protected routes using middleware
- ✅ Proper validations and error handling
- ✅ Clean folder structure for controllers, routes, and models

---

## 📁 Project Structure

minipay/
└── server/
├── controllers/
│ ├── authController.js
│ ├── walletController.js
│ └── transactionController.js
├── models/
│ ├── User.js
│ ├── Wallet.js
│ └── Transaction.js
├── routes/
│ ├── authRoute.js
│ ├── walletRoutes.js
│ └── transactionRoutes.js
├── middlewares/
│ ├── authMiddleware.js
│ └── rateLimiter.js
├── .env
├── server.js
└── README.md