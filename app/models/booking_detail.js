'use strict';
module.exports = (sequelize, DataTypes) => {
  const BookingDetail = sequelize.define('BookingDetail', {
      serviceSummaryId  : DataTypes.INTEGER,
      dateOfUse : DataTypes.DATE,
      timeFRom  : DataTypes.TIME,
      timeTo  : DataTypes.TIME,
      resourceBookingClass  : DataTypes.STRING,
      costOfService : DataTypes.DECIMAL,
      userId  : DataTypes.INTEGER,
      resourceUuid  : DataTypes.UUID,
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