'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('booking_detail_locations', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      longitude: {
        type: Sequelize.STRING
      },
      serviceBookingDetailsId: {
        type: Sequelize.INTEGER,
          references: {
              model: 'booking_details',
              key: 'id'
          }
      },
      description: {
        type: Sequelize.TEXT
      },
      resourceId: {
        type: Sequelize.UUID
      },
      latitude : {
        type: Sequelize.STRING
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
    return queryInterface.dropTable('booking_detail_locations');
  }
};