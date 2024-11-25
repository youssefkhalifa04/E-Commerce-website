require("dotenv").config(); // Load environment variables from .env file
const express = require("express");
const cors = require("cors");
const mongoose = require("./connect"); // Import the MongoDB connection file

const app = express();

// Middleware
app.use(express.json()); // Parse JSON bodies
app.use(cors()); // Enable CORS

// Routes
app.use("/api/users", require("./routes/user")); // User-related routes
app.use("/api/products", require("./routes/product")); // Product-related routes

// Error Handling Middleware
app.use((err, req, res, next) => {
  console.error(err.stack); // Log error stack for debugging
  res.status(500).send({ error: "Something went wrong!" });
});

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server started on http://localhost:${PORT}`);
});
