require("dotenv").config();
const express = require("express");
const mongoose = require("./connect");
const cors = require("cors");

const app = express();

// Middlewares
app.use(express.json());
app.use(cors());

// Routes
app.use("/app", require("./routes/user"));
app.use("/app", require("./routes/product"));

// Start Server
const port = process.env.port || 4000;
app.listen(port, () => console.log(`Server started at http://localhost:${port}`));
