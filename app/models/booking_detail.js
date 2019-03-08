'use strict';
module.exports = (sequelize, DataTypes) => {
  const BookingDetail = sequelize.define('BookingDetail', {
      serviceSummaryId  : DataTypes.INTEGER,
      dateFrom : DataTypes.DATE,
      dateTo : DataTypes.DATE,
      timeFrom  : DataTypes.TIME,
      timeTo  : DataTypes.TIME,
      resourceBookingClass  : DataTypes.STRING,
      costOfService : DataTypes.DECIMAL,
      userId  : DataTypes.INTEGER,
      userEmail : DataTypes.STRING,
      resourceId  : DataTypes.INTEGER,
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

