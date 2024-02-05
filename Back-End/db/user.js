const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    Firstname:String,
    lastname:String,
    education:String,
    skills:String,
    workplace:String,
    hobbies:String
})

module.exports = mongoose.model("user", userSchema,"user");