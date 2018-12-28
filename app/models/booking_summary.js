'use strict';
module.exports = (sequelize, DataTypes) => {
  const BookingSummary = sequelize.define('BookingSummary', {
      companyName : DataTypes.STRING,
      companyId : DataTypes.INTEGER,
      uuid  :  {
          type: DataTypes.UUID,
          defaultValue: DataTypes.UUIDV1,
          primaryKey: true
      }
  }, {});
    BookingSummary.associate = function(models) {
        BookingSummary.hasMany(models.BookingDetail, {
            foreignKey: 'serviceSummaryId',
            as: 'bookingDetails',
        });
  };
  return BookingSummary;
};