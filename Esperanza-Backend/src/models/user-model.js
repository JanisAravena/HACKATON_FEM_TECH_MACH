const mongoose = require('mongoose');

const { Schema } = mongoose;
const userSchema = new Schema({
  Nombre: String,
  Apellido: String,
  Rut: String,
  Telefono: String,
  Email: String,
  Password: String,
 
  aceptado: {
    type: Boolean,
    default: false
  }
}, { 
    timestamps: true,
    versionKey: false
});

const User = mongoose.model('User', userSchema);
module.exports = User;