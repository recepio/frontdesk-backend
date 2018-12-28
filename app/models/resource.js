'use strict';
module.exports = (sequelize, DataTypes) => {
  const Resource = sequelize.define('Resource', {
      uuid: {
          allowNull: false,
          type: DataTypes.UUID,
          defaultValue: DataTypes.UUIDV1,
          primaryKey: true
      },
      areaUuid: DataTypes.UUID,
      description: DataTypes.TEXT,
      name: DataTypes.STRING,
      resourceInstances: DataTypes.INTEGER,
      status: DataTypes.TEXT,
      bookingCapacityIndex: DataTypes.INTEGER,
      pricingPerIndex: DataTypes.DECIMAL
  }, {});
    Resource.associate = function(models) {
        Resource.hasMany(models.ResourceDescription, {
            foreignKey: 'resourceId',
            as: 'descriptions',
        });

  };
  return Resource;
};