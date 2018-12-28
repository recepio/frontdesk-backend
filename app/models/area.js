'use strict';
module.exports = (sequelize, DataTypes) => {
  const Area = sequelize.define('Area', {
      uuid: {
          allowNull: false,
          type: DataTypes.UUID,
          defaultValue: DataTypes.UUIDV1,
          primaryKey: true
      },
      name: DataTypes.STRING,
      companyId: DataTypes.INTEGER,
      unitOfMeasure: DataTypes.STRING,
      description: DataTypes.TEXT
  }, {});
  Area.associate = function(models) {
      Area.hasMany(models.Resource, {
          foreignKey: 'areaUuid',
          as: 'resources',
      });
  };
  return Area;
};