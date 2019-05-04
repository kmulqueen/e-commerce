const express = require("express");
const mongoose = require('mongoose');
const bodyParser = require("body-parser");
const users = require('./routes/api/users');
const store = require('./routes/api/store');
const passport = require("passport");

const app = express();

// DB config 
const db = require('./config/keys').mongoURI;

// Body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


// Connect to MongoDb
mongoose
  .connect(db)
  .then(()=> console.log('MongoDb has connected'))
  .catch(err => console.log(err));

app.get("/", (req, res) => {
  res.send("Home Page");
});

// Passport middleware
app.use(passport.initialize());

// Passport Config
require("./config/passport")(passport);

//Use the routes
app.use('/api/users', users);
app.use('/api/store', store);

const port = process.env.PORT || 3001;

app.listen(port, () => {
  console.log(`Server is up and running on port: ${port}`);
});
