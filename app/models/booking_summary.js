'use strict';
module.exports = (sequelize, DataTypes) => {
  const BookingSummary = sequelize.define('BookingSummary', {
      companyName : DataTypes.STRING,
      companyUuid : DataTypes.UUID,

  }, {});
    BookingSummary.associate = function(models) {
        BookingSummary.hasMany(models.BookingDetail, {
            foreignKey: 'serviceSummaryId',
            as: 'bookingDetails',
        });
  };
  return BookingSummary;
};