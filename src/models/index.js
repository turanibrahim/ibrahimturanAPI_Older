const Sequelize = require('sequelize');
require('dotenv').config()

if (process.env.DATABASE_URL) {
  const sequelize = new Sequelize(process.env.DATABASE_URL);
} else {
  const sequelize = new Sequelize({
    url: process.env.DATABASE_URL,
    dialect: "postgres",
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false
      }
    },
  });
}

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.aboutSections = require("./aboutSections.js")(sequelize, Sequelize);
db.experiences = require("./experiences.js")(sequelize, Sequelize);
db.socialMedias = require("./socialMedias.js")(sequelize, Sequelize);
db.contactForms = require("./contactForms.js")(sequelize, Sequelize);

module.exports = db;