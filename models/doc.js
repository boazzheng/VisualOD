const mongoose = require('mongoose')

const docSchema = new mongoose.Schema({
    name: {
        type: String
    },
    type: {
        // interseccao ou area
        type: String
    },
    data: {
        type: Buffer
    },
    areaDescription: {
        // codigo da interseccao ou da area
        type: String
    },
    city: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'City'
    }
})


module.exports = mongoose.model('Doc', docSchema)