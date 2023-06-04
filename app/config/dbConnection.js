const fs = require('fs');
const path = require('path');
const basename = path.basename(__filename);
const dbConfig = require("./db.config.js");
const Sequelize = require("sequelize");
// const tb_facilities = require('../models/user.model.js');

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  logging: false,
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  // operatorsAliases: false,
  define: {
    timestamps: false
  }
});
const db = {};

fs.readdirSync(path.join(__dirname, '../models'))
  .filter(file => {
    console.log("path.jo", path.join(file))
    // console.log(__dirname,"__dirname",file)
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
  })
  .forEach(file => {
    const model = require(path.join(__dirname, '../models', file))(sequelize, Sequelize.DataTypes);
    db[model.name] = model;
  });


Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

sequelize.authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
// export sequelize
