'use strict';
module.exports = (sequelize, DataTypes) => {
  const Area = sequelize.define('Area', {
      name: DataTypes.STRING,
      companyUuid: DataTypes.UUID,
      unitOfMeasure: DataTypes.STRING,
      description: DataTypes.TEXT
  }, {});
  Area.associate = function(models) {
      Area.Resources = Area.hasMany(models.Resource, {
          foreignKey: 'areaId',
          as: 'resources',
      });
  };
  return Area;
};