'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('booking_summaries', {
       id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER
       },
      companyName : {
        type: Sequelize.STRING
      },
      companyUuid : {
        type: Sequelize.UUID,
          references: {
              model: 'Company',
              key: 'uuid'
          }
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
    return queryInterface.dropTable('booking_summaries');
  }
};