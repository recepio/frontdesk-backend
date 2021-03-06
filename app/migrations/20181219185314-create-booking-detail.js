'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('booking_details', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      resourceName: {
          type: Sequelize.STRING
      },
      serviceSummaryId  : {
          type: Sequelize.UUID,
          references: {
              model: 'booking_summaries',
              key: 'uuid'
          }
      },
      dateOfUse : {
          type: Sequelize.DATE
      },
      timeFrom : {
          type: Sequelize.TIME
      },
      timeTo : {
          type: Sequelize.TIME
      },
      resourceBookingClass : {
          type: Sequelize.STRING
      },
      costOfService : {
          type: Sequelize.DECIMAL
      },
      userId : {
          type: Sequelize.INTEGER
      },
      resourceId : {
          type: Sequelize.UUID
      },
      StartingLocation : {
          type: Sequelize.STRING
      },
      metaInformation : {
          type: Sequelize.TEXT
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
    return queryInterface.dropTable('booking_details');
  }
};