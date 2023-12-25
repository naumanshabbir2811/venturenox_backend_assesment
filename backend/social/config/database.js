// config/database.js
const { Sequelize } = require('sequelize');
const dotenv = require('dotenv')
dotenv.config()
const sequelize = new Sequelize(
    'social',
    'postgres',
    'postgres',
    {
        host: 'postgres',
        dialect: 'postgres',
        logging: false
    });

module.exports = sequelize;