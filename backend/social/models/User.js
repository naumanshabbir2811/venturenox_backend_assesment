const { DataTypes, Sequelize } = require('sequelize');
const sequelize = require('../config/database');
const TenantProfile = require('./Tenant');

class UserProfile extends Sequelize.Model {}

UserProfile.init({
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  first_name: DataTypes.STRING,
  last_name: DataTypes.STRING,
  department: DataTypes.STRING,
  designation: DataTypes.STRING,
  image_url: DataTypes.STRING,
  city: DataTypes.STRING,
  country: DataTypes.STRING,
  bio: DataTypes.STRING,
  social_links: DataTypes.JSON,
  employee_id: DataTypes.INTEGER,
  is_active: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
  tenant_id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    references: {
      model: TenantProfile,
      key: 'tenant_id',
    },
  },
}, {
  sequelize,
  modelName: 'UserProfile',
  tableName: 'user_profiles',
});

UserProfile.belongsTo(TenantProfile, { foreignKey: 'tenant_id', targetKey: 'tenant_id' });

module.exports = UserProfile;
