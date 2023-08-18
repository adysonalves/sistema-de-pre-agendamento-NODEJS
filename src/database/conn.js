const { Sequelize } = require('sequelize');

const conn = new Sequelize({
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    username: process.env.DB_USER,
    password: process.env.DB_PASSWD,
    port: process.env.DB_PORT,
    dialect: process.env.DB_DIALECT,
    timezone: process.env.DB_TIMEZONE
});

module.exports = conn;