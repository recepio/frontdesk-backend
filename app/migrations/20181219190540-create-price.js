'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('prices', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      resourceId  : {
          type: Sequelize.INTEGER,
          references: {
              model: 'Resource',
              key: 'id'
          }
      },
      basePricePerUse: {
        type: Sequelize.STRING
      },
      fixedCharge: {
        type: Sequelize.DECIMAL
      },
      resourceBookingClass: {
        type: Sequelize.STRING
      },
      name: {
          type: Sequelize.STRING
      },
      periodOfUse: {
        type: Sequelize.STRING
      },
      discount: {
        type: Sequelize.DECIMAL
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('prices');
  }
};