'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('user_profiles', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      first_name: Sequelize.STRING,
      last_name: Sequelize.STRING,
      department: Sequelize.STRING,
      designation: Sequelize.STRING,
      image_url: Sequelize.STRING,
      city: Sequelize.STRING,
      country: Sequelize.STRING,
      bio: Sequelize.STRING,
      social_links: Sequelize.JSON,
      employee_id: Sequelize.INTEGER,
      is_active: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: true,
      },
      tenant_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'tenant_profiles',
          key: 'tenant_id',
        },
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },

  down: async (queryInterface) => {
    await queryInterface.dropTable('user_profiles');
  },
};
