'use strict';
module.exports = (sequelize, DataTypes) => {
  const BookingDetail = sequelize.define('BookingDetail', {
      serviceSummaryId  : DataTypes.UUID,
      dateOfUse : DataTypes.DATE,
      timeFRom  : DataTypes.TIME,
      timeTo  : DataTypes.TIME,
      resourceBookingClass  : DataTypes.STRING,
      costOfService : DataTypes.DECIMAL,
      userId  : DataTypes.INTEGER,
      resourceId  : DataTypes.UUID,
      resourceName : DataTypes.STRING,
      StartingLocation  : DataTypes.STRING
  }, {
      classMethods: {
          associate: function(models) {
              BookingDetail.belongsTo(models.BookingSummary, {
                  foreignKey: 'serviceSummaryId'
              });
          }
      }
  });

  return BookingDetail;
};