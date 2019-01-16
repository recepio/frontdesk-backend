'use strict';
module.exports = (sequelize, DataTypes) => {
  const CustomerReview = sequelize.define('CustomerReview', {
      description: DataTypes.TEXT,
      ratingPercentage: DataTypes.INTEGER,
      userId: DataTypes.INTEGER,
      resourceId: {
          type: DataTypes.INTEGER,
      }
  }, {});
    CustomerReview.associate = function(models) {
    // associations can be defined here
  };
  return CustomerReview;
};