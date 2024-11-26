const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const User = require("../models/user");

// Sign up route
router.post("/signup", async (req, res) => {
  try {
    const { Name, Email, Password } = req.body;

    // Validate request data
    if (!Name || !Email || !Password) {
      return res.status(400).json({ message: "All fields are required" });
    }

    // Check if the user already exists
    const existingUser = await User.findOne({ Email });
    if (existingUser) {
      return res.status(400).json({ message: "Email already in use" });
    }

    // Hash the password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(Password, salt);

    // Create a new user
    const newUser = new User({
      Name,
      Email,
      Password: hashedPassword,
      Date : Date.now()
    });

    // Save the user to the database
    const savedUser = await newUser.save();
    return res.status(201).json({
      message: "User registered successfully",
      user: {
        id: savedUser._id,
        Name: savedUser.Name,
        Email: savedUser.Email,
        Date : savedUser.Date 
      },
    });
  } catch (error) {
    console.error("Error during signup:", error);
    return res.status(500).json({ message: "An error occurred", error });
  }
});

// Login route
router.post("/login", async (req, res) => {
  try {
    const { Name, Password } = req.body;

    // Validate request data
    if (!Name || !Password) {
      return res.status(400).json({ message: "Name and password are required" });
    }

    // Find the user by Name
    const user = await User.findOne({ Name });
    if (!user) {
      return res.status(401).json({ message: "Invalid name or password" });
    }

    // Compare the provided password with the hashed password
    const isPasswordValid = await bcrypt.compare(Password, user.Password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: "Invalid name or password" });
    }

    // If credentials are valid, send success response
    return res.status(200).json({
      message: "Login successful",
      user: {
        id: user._id,
        Name: user.Name,
        Email: user.Email,
      },
    });
  } catch (error) {
    console.error("Error during login:", error);
    return res.status(500).json({ message: "An error occurred", error });
  }
});

// Get all users route
router.get("/", async (req, res) => {
  try {
    const users = await User.find(); // Fetch all users from the database
    res.status(200).json(users); // Send users data as a JSON response
  } catch (error) {
    console.error("Error fetching users:", error);
    return res.status(500).json({ message: "An error occurred while fetching users" });
  }
});

module.exports = router;
