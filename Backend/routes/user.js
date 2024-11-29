const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const User = require("../models/user");
const { body, validationResult } = require('express-validator');

// Sign up route
router.post(
  "/signup",
  [
    body('Email').isEmail().withMessage('Invalid Email'),
    body('Password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters'),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    try {
      const { FirstName, LastName, Email, Password } = req.body;

      // Validate request data
      if (!FirstName || !LastName || !Email || !Password) {
        return res.status(400).json({ message: "All fields are required" });
      }

      // Check if the user already exists (this step can be skipped if you are confident in the uniqueness constraint)
      const existingUser = await User.findOne({ Email });
      if (existingUser) {
        return res.status(400).json({ message: "Email already in use" });
      }

      // Hash the password
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(Password, salt);

      // Create a new user
      const newUser = new User({
        FirstName,
        LastName,
        Email,
        Password: hashedPassword,
        Date: Date.now(),
        Role: 'Normal User',
      });

      // Save the user to the database
      const savedUser = await newUser.save();
      return res.status(201).json({
        message: "User registered successfully",
        user: {
          id: savedUser._id,
          FirstName: savedUser.FirstName,
          LastName: savedUser.LastName,
          Email: savedUser.Email,
          Date: savedUser.Date,
          Role: 'Normal User',
        },
      });
    } catch (error) {
      console.error("Error during signup:", error);

      // Check for duplicate email error (MongoDB error code 11000)
      if (error.code === 11000) {
        return res.status(400).json({ message: "Email already in use" });
      }

      return res.status(500).json({ message: "An error occurred", error });
    }
  }
);


// Login route
router.post("/login", async (req, res) => {
  try {
    const { Email, Password } = req.body;

    // Validate request data
    if (!Email || !Password) {
      return res.status(400).json({ message: "Email and password are required" });
    }

    // Find the user by Email
    const user = await User.findOne({ Email });
    if (!user) {
      return res.status(401).json({ message: "Invalid Email or password" });
    }

    // Compare the provided password with the hashed password
    const isPasswordValid = await bcrypt.compare(Password, user.Password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

    // If credentials are valid, send success response
    return res.status(200).json({
      message: "Login successful",
      user: {
        id: user._id,
        FirstName: user.FirstName,
        LastName: user.LastName,
        Email: user.Email,
      },
    });
  } catch (error) {
    console.error("Error during login:", error);
    return res.status(500).json({ message: "An error occurred", error });
  }
});

// Update user role route
router.put("/:id", async (req, res) => {
  try {
    const { id } = req.params; // Get user ID from the route parameter
    const { Role } = req.body; // Get the new role from the request body

    // Validate the new role
    if (!Role) {
      return res.status(400).json({ message: "Role is required" });
    }

    // Find the user by ID and update the role
    const updatedUser = await User.findByIdAndUpdate(
      id,
      { Role },
      { new: true } // Return the updated document
    );

    // If user not found
    if (!updatedUser) {
      return res.status(404).json({ message: "User not found" });
    }

    // Respond with the updated user data
    return res.status(200).json({
      message: "User role updated successfully",
      user: updatedUser,
    });
  } catch (error) {
    console.error("Error updating user role:", error);
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
