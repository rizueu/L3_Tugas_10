const { Sequelize } = require('sequelize');
const Database = new Sequelize('arkademy', 'root', 'root', {
    host: 'localhost',
    dialect: 'mysql',
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
});

Database.sync({});

module.exports = Database;