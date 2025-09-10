const { Sequelize } = require('sequelize');

const { DB_HOST , DB_USER , DB_PASSWORD , DB_NAME , DB_TYPE } = process.env;

const sequelize = new Sequelize(DB_NAME,DB_USER,DB_PASSWORD,{
    host:DB_HOST,
    dialect:DB_TYPE
});

module.exports = sequelize;