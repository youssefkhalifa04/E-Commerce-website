const mongoose = require("mongoose");


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
  },
  Password: {
    type: String,
    required: true,
  },
  Date: {
    type: Date,
    default: Date.now, 
  },
});


const User = mongoose.model("User", userSchema);
module.exports = User;
