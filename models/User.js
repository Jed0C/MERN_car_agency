const mongoose = require("mongoose");
const schema = mongoose.Schema;
const UserSchema = new schema({

  
  name: {
    type: String,
    required: true,
  },
  lastname: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
  },
  address: {
    type: String,
  },
  role: {
    type: String,
    enum: ['user', 'admin'],
    default: 'user',
  }
});

module.exports = mongoose.model("user", UserSchema);
