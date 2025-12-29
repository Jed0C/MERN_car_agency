const express = require("express");
const User = require("../models/User");
const router = express.Router();
const bcrypt = require("bcrypt");
const user = require("../models/User");
const jwt = require("jsonwebtoken");
const {
  loginRules,
  registerRules,
  validation,
} = require("../../middleware/validator");
const isAuth = require("../../middleware/passport");

//register  //sign up
router.post("/register", registerRules(), validation, async (req, res) => {
  const { name, lastname, email, password } = req.body;
  try {
    const newUser = new User({ name, lastname, email, password });
    // check if the email exist
    const searchedUser = await User.findOne({ email });

    if (searchedUser) {
      return res.status(400).send({ msg: "email already exist" });
    }

    // hash password
    const salt = 10;
    const genSalt = await bcrypt.genSalt(salt);
    const hashedPassword = await bcrypt.hash(password, genSalt);
    console.log(hashedPassword);
    newUser.password = hashedPassword;
    // generation token
    //save  the user
    const newUserToken = await newUser.save();
    const payload = {
      _id: newUser._id,
      name: newUserToken.name,
    };
    const token = await jwt.sign(payload, process.env.SecretOrkey, {
      expiresIn: 3600,
    });

    res
      .status(200)
      .send({ newUserToken, msq: "user is saved", token: `bearer ${token}` });
  } catch (error) {
    res.send(error);
    console.log(error);
  }
});
//login  //signin
router.post("/login", loginRules(), validation, async (req, res) => {
  const { email, password } = req.body;
  try {
    //find if the user exist
    const searchedUser = await User.findOne({ email });
    //find if the email not exist
    if (!searchedUser) {
      return res.status(400).send({ msg: "Bad credential" });
    }
    //if password are equal
    const match = await bcrypt.compare(password, searchedUser.password);
    if (!match) {
      return res.status(400).send({ msg: "Bad credential" });
    }
    //creer un token
    const payload = {
      _id: searchedUser._id,
      name: searchedUser.name,
      role: searchedUser.role,// this is for the admin role
    };
    const token = await jwt.sign(payload, process.env.SecretOrKey, {
      expiresIn: 3600,
    });
    //console.log(token)
    //send the user
    res
      .status(200)
      .send({ user: searchedUser, msg: "success", token: `bearer ${token}` });
  } catch (error) {
    res.status(500).send({ msg: "Can not get the user" });
  }
});
//  /current
router.get("/current", isAuth(), async (req, res) => {
  try {
    const user = await User.findById(req.user._id).select("-password");
    res.status(200).json({ user });
  } catch (err) {
    res.status(500).json({ msg: "Server error" });
  }
});

//    res.status(200).send({ user: req.user });
// });

//update data
router.put("/:id", async (req, res) => {
    try {
        let result = await User.findByIdAndUpdate(
            { _id: req.params.id },               
            { $set: { ...req.body } }             
        );
        res.send({ msg: "user is updated" });
    } catch (error) {
        console.log(error);
    }
});


///get all users
router.get("/", async (req, res) => {
    try {
        let result = await User.find();           // Fetch all users
        res.send({ users: result, msg: "all users" });  // Send response with list of users
    } catch (error) {
        console.log(error);
    }
});


module.exports = router;
