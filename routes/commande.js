// Import required modules
const express = require("express");
const Commande = require("../models/Commande"); // Import the User model (Mongoose schema)

// Create a new Express router instance for user routes
const commandeRouter = express.Router();


// Route: Add a new commande
// Method: POST /user/add
// Description: Receives user data in the request body, creates a new user, and saves it to the database
commandeRouter.post("/add", async (req, res) => {
    try {
        let newcommande = new Commande(req.body);         // Create a new User instance from request body
        let result = await newcommande.save();        // Save the user to the database
        res.send({ commande: result, msg: "commande is added" });  // Send success response
    } catch (error) {
        console.log(error); // Log any errors
    }
});


// Route: Get all users
// Method: GET /user/
// Description: Retrieves and returns all users from the database
commandeRouter.get("/", async (req, res) => {
    try {
        let result = await Commande.find();           // Fetch all users
        res.send({ commandes: result, msg: "all commande" });  // Send response with list of users
    } catch (error) {
        console.log(error);
    }
});


// Route: Get a single user by ID
// Method: GET /user/:id
// Description: Retrieves one user based on their ID
commandeRouter.get("/:id", async (req, res) => {
    try {
        let result = await Commande.findById(req.params.id);  // Find user by ID
        res.send({ commande: result, msg: "one commande" });
    } catch (error) {
        console.log(error);
    }
});


// Route: Delete a user by ID
// Method: DELETE /user/:id
// Description: Deletes a user based on their ID
commandeRouter.delete("/:id", async (req, res) => {
    try {
        let result = await Commande.findByIdAndDelete(req.params.id);  // Delete user by ID
        res.send({ msg: "commande is deleted" });
    } catch (error) {
        console.log(error);
    }
});


// Route: Update a user by ID
// Method: PUT /user/:id
// Description: Updates a user's data based on their ID and request body
commandeRouter.put("/:id", async (req, res) => {
    try {
        let result = await Commande.findByIdAndUpdate(
            { _id: req.params.id },               
            { $set: { ...req.body } }             
        );
        res.send({ msg: "commande is updated" });
    } catch (error) {
        console.log(error);
    }
});


// GET /commande/user/:userId
commandeRouter.get("/user/:userId", async (req, res) => {
  try {
    const commandes = await Commande.find({ userId: req.params.userId });
    res.status(200).json({ commandes });
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch commandes", error: err });
  }
});

// Export the user router to be used in other parts of the app
module.exports = commandeRouter;
