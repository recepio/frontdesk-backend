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
      resourceId: {
        type: Sequelize.INTEGER
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
      periodOfUse: {
        type: Sequelize.TIME
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