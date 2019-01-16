'use strict';
module.exports = (sequelize, DataTypes) => {
  const Company = sequelize.define('Company', {
      uuid: {
          allowNull: false,
          type: DataTypes.UUID,
          defaultValue: DataTypes.UUIDV1,
          primaryKey: true
      },
      name: DataTypes.STRING,
      description : DataTypes.TEXT,
      location  : DataTypes.STRING
  }, {});
    Company.associate = function(models) {
        Company.Users = Company.hasMany(models.CompanyMember, {
            foreignKey: 'companyUuid',
            as: 'users',
        });
        Company.Areas = Company.hasMany(models.Area, {
            foreignKey: 'companyUuid',
            as: 'areas',
        });
    };
    Company.prototype.toWeb = function () {
        let json = this.toJSON();
        return json;
    };
  return Company;
};