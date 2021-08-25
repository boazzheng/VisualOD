const mongoose = require('mongoose')

const odSchema = new mongoose.Schema({
  DATA_ORIGEM: {
    type: String
  },
  HORA_ORIGEM: {
    type: String
  },
  TIPO_CARTAO: {
    type: String
  },
  ORIGEM: {
    type: String
  },
  DESTINO: {
    type: String
  },
  QUANTIDADE_PASSAGEIROS: {
    type: String
  },
  CIDADE: {
    type: String,
  }
})

module.exports = mongoose.model('OD', odSchema)