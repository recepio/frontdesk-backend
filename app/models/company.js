'use strict';
module.exports = (sequelize, DataTypes) => {
  const Company = sequelize.define('Company', {
      name: DataTypes.STRING,
      description : DataTypes.TEXT,
      location  : DataTypes.STRING
  }, {});
    Company.associate = function(models) {
        Company.hasMany(models.CompanyMember, {
            foreignKey: 'companyId',
            as: 'descriptions',
        });
    };
  return Company;
};