const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const db = require("./src/models");

//DOTENV
require('dotenv').config()

//Import Routes
const aboutRouter = require('./routes/about');
const experienceRouter = require('./routes/experience');
const contactRouter = require('./routes/contact');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


//TESTING DB CONNECTION
db
.sequelize.authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

//SYNC MODELS TO DB
db.sequelize.sync()
  .then(() => {
    console.log('Synced successfully.');
  })
  .catch(err => {
    console.error('Unable to sync to the database:', err);
  });

//ROUTES
app.use('/api/about', aboutRouter);
app.use('/api/experience', experienceRouter);
app.use('/api/contact', contactRouter);

module.exports = app;
