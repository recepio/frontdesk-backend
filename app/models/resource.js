'use strict';
module.exports = (sequelize, DataTypes) => {
  const Resource = sequelize.define('Resource', {
      areaId: DataTypes.INTEGER,
      description: DataTypes.TEXT,
      name: DataTypes.STRING,
      resourceInstances: DataTypes.INTEGER,
      status: DataTypes.TEXT,
      bookingCapacityIndex: DataTypes.INTEGER,
      pricingPerIndex: DataTypes.DECIMAL
  }, {});
    Resource.associate = function(models) {
        Resource.Descriptions = Resource.hasMany(models.ResourceDescription, {
            foreignKey: 'resourceId',
            as: 'descriptions',
        });
        Resource.Prices = Resource.hasMany(models.Price, {
            foreignKey: 'resourceId',
            as: 'prices',
        });
        Resource.Details = Resource.hasMany(models.BookingDetail, {
            foreignKey: 'resourceId',
            as: 'details',
        });

  };
  return Resource;
};
