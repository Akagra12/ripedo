const mongoose = require('mongoose');
// require('dotenv').config(); // Load environment variables

function connectToDb() {
    mongoose
        .connect(process.env.DB_CONNECT,)
        .then(() => {
            console.log("Connected to DB")
        })
        .catch(err => console.log("Database connection error:", err));
}

module.exports = connectToDb;
