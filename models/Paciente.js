

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for AdUnits
let Paciente = new Schema({
  paciente_nome: {
    type: String
  },
  paciente_genero: {
    type: Number
  },
  paciente_data_de_nascimento: {
    type: Date
  },
},{
    collection: 'Paciente'
});

module.exports = mongoose.model('Paciente', Paciente);