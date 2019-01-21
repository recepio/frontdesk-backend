'use strict';
module.exports = (sequelize, DataTypes) => {
  const Price = sequelize.define('Price', {
      resourceId: DataTypes.INTEGER,
      name: DataTypes.STRING,
      basePricePerUse: DataTypes.STRING,
      fixedCharge: DataTypes.DECIMAL,
      resourceBookingClass: DataTypes.STRING,
      periodOfUse: DataTypes.STRING,
      discount: DataTypes.DECIMAL
  }, {});
    Price.associate = function(models) {
    // associations can be defined here
  };
  return Price;
};