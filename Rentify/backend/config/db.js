const mongoose = require("mongoose")

const connectDB = async () => {
    await mongoose.connect('mongodb://localhost:27017/rentify').then(()=>console.log("DB Connected"));
}

module.exports = connectDB