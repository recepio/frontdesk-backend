'use strict';
module.exports = (sequelize, DataTypes) => {
  const ResourceDescription = sequelize.define('ResourceDescription', {
      name: DataTypes.STRING,
      description: DataTypes.STRING,
      resourceId: DataTypes.INTEGER
  }, {});
    ResourceDescription.associate = function(models) {
        ResourceDescription.belongsTo(models.Resource, {
            foreignKey: 'resourceId'
        });
  };
  return ResourceDescription;
};