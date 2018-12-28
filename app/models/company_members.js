'use strict';
module.exports = (sequelize, DataTypes) => {
  const CompanyMember = sequelize.define('CompanyMember', {
      email     : {type: DataTypes.STRING, allowNull: true, unique: true, validate: { isEmail: {msg: "invalid email address"} }},
      password  : DataTypes.STRING,
      position  : DataTypes.STRING,
      companyId : DataTypes.INTEGER
  }, {});
    CompanyMember.associate = function(models) {
        CompanyMember.belongsTo(models.Company, {
            foreignKey: 'companyId'
        });
  };
  return CompanyMember;
};