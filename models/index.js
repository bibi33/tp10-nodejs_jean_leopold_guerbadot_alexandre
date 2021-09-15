const dbconfig = require("../config/database");
const Sequelize = require ("sequelize");
const sequelize = new Sequelize(dbconfig.DB);

const db = {}

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.song = require("./song") (sequelize, Sequelize);

module.exports = db;
