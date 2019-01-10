'use strict';
module.exports = (sequelize, DataTypes) => {
  const Company = sequelize.define('Company', {
      name: DataTypes.STRING,
      description : DataTypes.TEXT,
      location  : DataTypes.STRING
  }, {});
    Company.associate = function(models) {
        Company.Users = Company.hasMany(models.CompanyMember, {
            foreignKey: 'companyId',
            as: 'users',
        });
    };
    Company.prototype.toWeb = function () {
        let json = this.toJSON();
        return json;
    };
  return Company;
};