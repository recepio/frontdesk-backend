'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('resources', {
        uuid: {
            type: Sequelize.UUID,
            defaultValue: Sequelize.UUIDV1,
            primaryKey: true
        },
        areaUuid: {
          type: Sequelize.UUID
        },
        description: {
          type: Sequelize.TEXT
        },
        name: {
          type: Sequelize.STRING
        },
        resourceInstances: {
          type: Sequelize.INTEGER
        },
        status: {
          type: Sequelize.TEXT
        },
        bookingCapacityIndex: {
          type: Sequelize.INTEGER
        },
        pricingPerIndex: {
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
    return queryInterface.dropTable('resources');
  }
};