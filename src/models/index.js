const Sequelize = require('sequelize');
require('dotenv').config()

const sequelize = new Sequelize({
  database: process.env.DATABASE_NAME,
  username: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  host: process.env.DATABASE_HOST,
  port: process.env.PORT,
  dialect: "postgres",
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false
    }
  },
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.aboutSections = require("./aboutSections.js")(sequelize, Sequelize);
db.experiences = require("./experiences.js")(sequelize, Sequelize);
db.socialMedias = require("./socialMedias.js")(sequelize, Sequelize);
db.contactForms = require("./contactForms.js")(sequelize, Sequelize);

module.exports = db;