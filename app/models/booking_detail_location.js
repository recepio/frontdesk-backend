'use strict';
module.exports = (sequelize, DataTypes) => {
  const BookingDetailLocation = sequelize.define('BookingDetailLocation', {
      serviceBookingDetailsId: DataTypes.INTEGER,
      description: DataTypes.TEXT,
      resourceId: DataTypes.UUID,
      longitude : DataTypes.STRING,
      latitude  : DataTypes.STRING
  }, {});
    BookingDetailLocation.associate = function(models) {
    // associations can be defined here
  };
  return BookingDetailLocation;
};