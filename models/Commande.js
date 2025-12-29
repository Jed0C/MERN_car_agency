// Import Mongoose library for MongoDB interaction
const mongoose = require("mongoose");
const schema = mongoose.Schema; // Shortcut to define schema

// Define the structure of a User document
const commandeSchema = new mongoose.Schema({

  userId: {
    type: String
  },
    userName: {
    type: String,
    required: true
  },
    manufacturer: {
    type: String,
    required: true
  },
  model: {
    type: String,
    required: true
  },
  status: {
    type: String,
    enum: ['Rent', 'Sale'],
    required: true
  },
  price: {
    type: String,
    required: true
  },
  rentalPeriod: {
    startDate: {
      type: Date,
      required: function () {
        return this.status === 'Rent';
      }
    },
    endDate: {
      type: Date,
      required: function () {
        return this.status === 'Rent';
      }
    }
  },
  operationDate: {
    type: Date,
    default: Date.now
  },
  requestStatus:{
    type: String,
    enum: ['accepted', 'pending' , 'rejected'],
    default:'pending'
  },
});

// Create the User model based on the schema
const Commande = mongoose.model('Commande', commandeSchema);

// Export the User model so it can be used in other parts of the app
module.exports = Commande;
