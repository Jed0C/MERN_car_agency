// Import required modules
const express = require("express");
const Car = require("../models/car"); // Import the User model (Mongoose schema)

// Create a new Express router instance for user routes
const carRouter = express.Router();


// Route: Add a new car
// Method: POST /user/add
// Description: Receives user data in the request body, creates a new user, and saves it to the database
carRouter.post("/add", async (req, res) => {
    try {
        let newcar = new Car(req.body);         // Create a new User instance from request body
        let result = await newcar.save();        // Save the user to the database
        res.send({ car: result, msg: "car is added" });  // Send success response
    } catch (error) {
        console.log(error); // Log any errors
    }
});


// Route: Get all users
// Method: GET /user/
// Description: Retrieves and returns all users from the database
carRouter.get("/", async (req, res) => {
    try {
        let result = await Car.find();           // Fetch all users
        res.send({ cars: result, msg: "all car" });  // Send response with list of users
    } catch (error) {
        console.log(error);
    }
});


// Route: Get a single user by ID
// Method: GET /user/:id
// Description: Retrieves one user based on their ID
carRouter.get("/:id", async (req, res) => {
    try {
        let result = await Car.findById(req.params.id);  // Find user by ID
        res.send({ car: result, msg: "one car" });
    } catch (error) {
        console.log(error);
    }
});


// Route: Delete a user by ID
// Method: DELETE /user/:id
// Description: Deletes a user based on their ID
carRouter.delete("/:id", async (req, res) => {
    try {
        let result = await Car.findByIdAndDelete(req.params.id);  // Delete user by ID
        res.send({ msg: "car is deleted" });
    } catch (error) {
        console.log(error);
    }
});


// Route: Update a user by ID
// Method: PUT /user/:id
// Description: Updates a user's data based on their ID and request body
carRouter.put("/:id", async (req, res) => {
    try {
        let result = await Car.findByIdAndUpdate(
            { _id: req.params.id },               
            { $set: { ...req.body } }             
        );
        res.send({ msg: "car is updated" });
    } catch (error) {
        console.log(error);
    }
});


// Export the user router to be used in other parts of the app
module.exports = carRouter;
