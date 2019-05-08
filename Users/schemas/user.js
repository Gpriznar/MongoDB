const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
  firstname: String,
  lastname: String,
  age: Number,
  state: String
})

const User = mongoose.model('User', userSchema)

module.exports = User
