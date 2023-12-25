// models/TenantProfile.js
const { DataTypes, Sequelize } = require('sequelize');
const sequelize = require('../config/database');

const TenantProfile = sequelize.define('TenantProfile', {
  tenant_id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: DataTypes.STRING,
  address: DataTypes.JSON,
  city: DataTypes.STRING,
  state: DataTypes.STRING,
  country: DataTypes.STRING,
  zip_code: DataTypes.STRING,
  phone: DataTypes.STRING,
  web_url: DataTypes.STRING,
  is_active: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
}, { tableName: 'tenant_profiles' });

module.exports = TenantProfile;
