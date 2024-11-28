const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

// User Schema
const userSchema = new mongoose.Schema({
  Name: {
    type: String,
    required: true,
    trim: true,
  },
  Email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true,
    match: [/^\S+@\S+\.\S+$/, 'Please use a valid email address'], // Email regex validation
  },
  Password: {
    type: String,
    required: true,
    minlength: 6, // Ensure password length is at least 6 characters
  },
  Date: {
    type: Date,
    default: Date.now,
  },
});

// Pre-save middleware for hashing password before saving it to DB
userSchema.pre("save", async function (next) {
  if (this.isModified("Password") || this.isNew) {
    try {
      const salt = await bcrypt.genSalt(10);
      this.Password = await bcrypt.hash(this.Password, salt);
      next();
    } catch (error) {
      next(error);
    }
  } else {
    next();
  }
});

// Instance method for comparing passwords
userSchema.methods.comparePassword = async function (candidatePassword) {
  return bcrypt.compare(candidatePassword, this.Password);
};

const User = mongoose.model("User", userSchema);

module.exports = User;
