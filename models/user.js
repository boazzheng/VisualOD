const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    // required: true
  },
  email: {
    type: String,
    // required: true
  },
  password: {
    type: String,
    // required: true
  },
  city: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'City'
    // required: true
  },
  createdAt: {
    type: Date,
    // required: true,
    default: Date.now
  },
  isAdmin: {
      type: Boolean,
      // required: true,
      default: false
  }
})


module.exports = mongoose.model('User', userSchema)