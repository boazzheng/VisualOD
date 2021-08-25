const mongoose = require('mongoose')
const User = require('./user')

const citySchema = new mongoose.Schema({
  name: {
    type: String
  },
  coord: {
    type: Array
  },
  zoneamento: {
    type: Object
  }
})

citySchema.pre('remove', function(next) {
  User.find({ city: this.id }, (err, users) => {
    if (err) {
      next(err)
    } else if (users.length > 0) {
      next(new Error('Há usuário(s) nessa cidade.'))
    } else {
      next()
    }
  })
})

module.exports = mongoose.model('City', citySchema)