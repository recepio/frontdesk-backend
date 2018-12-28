'use strict';
module.exports = (sequelize, DataTypes) => {
  const ResourceAllocationQueue = sequelize.define('ResourceAllocationQueue', {
      serviceBookingDetailsId: DataTypes.INTEGER,
      description: DataTypes.TEXT,
      resourceId:   DataTypes.UUID,
      status: DataTypes.STRING
  }, {});
    ResourceAllocationQueue.associate = function(models) {
    // associations can be defined here
  };
  return ResourceAllocationQueue;
};