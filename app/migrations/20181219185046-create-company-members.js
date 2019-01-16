'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('company_members', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      email: {
        type: Sequelize.STRING,
        unique: 'uniqueTag',
      },
      password: {
        type: Sequelize.STRING
      },
      position: {
        type: Sequelize.STRING
      },
      companyUuid: {
        type: Sequelize.UUID,
        unique: 'uniqueTag'
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    },
     {
       indexes: [
          {
           unique: true,
           fields: ['email', 'companyUUid']
          }
         ]
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('company_members');
  }
};