const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const db = require("./src/models");

//DOTENV
require('dotenv').config()

const aboutRouter = require('./routes/about');

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

module.exports = app;
