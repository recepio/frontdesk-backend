'use strict';
module.exports = (sequelize, DataTypes) => {
  const Client = sequelize.define('Client', {
    name: DataTypes.STRING,
    companyUuid: DataTypes.UUID,
    email: DataTypes.STRING
  }, {});
  Client.associate = function(models) {
    // associations can be defined here
  };
  return Client;
};