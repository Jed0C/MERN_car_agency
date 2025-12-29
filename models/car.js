// Import Mongoose library for MongoDB interaction
const mongoose = require("mongoose");
const schema = mongoose.Schema; // Shortcut to define schema

// Define the structure of a User document
const carSchema = new mongoose.Schema({
    
    manufacturer: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  },
  type: {
    type: String,
    
  },
  year: {
    type: String,
    
  },
  price: {
    type: String,
    required: true
  },
  model: {
    type: String,
    required: true
  },
  transmission: {
    type: String,
    enum: ['Tiptronic', 'Automatic', 'Manual'],
    
  },
  typeOfDrive: {
    type: String,
    enum: ['All-wheel drive', 'Front-wheel drive', 'Rear-wheel drive'],
    required: true
  },
  fuel: {
    type: String,
    enum: ['Gasoline', 'Diesel', 'Electric', 'Hybrid'],
    required: true
  },
  engine: {
    displacement: {
      type: String,
      
    },
    power: {
      horsepower: {
        type: Number,
        
      },
      watts: {
        type: Number,
        
      }
    }
  },
  mileage: {
    type: String, // Alternatively: type: Number, if you'd convert "94K mi" to numeric miles
    required: true
  },
  status: {
    type: String,
    enum: ['Rent', 'Sale'],
    required: true
  }
});

// Create the User model based on the schema
const Car = mongoose.model('car', carSchema);

// Export the User model so it can be used in other parts of the app
module.exports = Car;
