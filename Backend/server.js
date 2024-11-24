// imports
require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const session = require("express-session");
require("./connect");
require('./routes/user');
require('./routes/product');


// middlewears
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// Enables session management in your application
app.use(
  session({
    secret: "my secret key",
    saveUninitialized: true,
    resave: false,
  })
);

// route prefix

app.use("", require("./routes/user"));
app.use("", require("./routes/product"));


app.use((res, req, next) => {
  res.loclas.message = req.session.message; //  Implements a simple mechanism for flash messages. Flash messages are temporary messages (e.g., success, error notifications) stored in the session and displayed on the next page load.

  delete req.session.message;
  next();
});

// set template engine

app.set("view engine", "ejs");

const port = process.env.port || 4000;

app.listen(port, () => {
  console.log(`Server started at http://localhost:${port}`);
});
