'use strict';
module.exports = (sequelize, DataTypes) => {
  const CompanyMember = sequelize.define('CompanyMember', {
      email     : {type: DataTypes.STRING, allowNull: true, validate: { isEmail: {msg: "invalid email address"} }},
      password  : DataTypes.STRING,
      position  : DataTypes.STRING,
      companyId : DataTypes.INTEGER
  }, {});
    CompanyMember.associate = function(models) {
        CompanyMember.company = CompanyMember.belongsTo(models.Company, {
            foreignKey: 'companyId',
            as: 'company'
        });
  };
  CompanyMember.prototype.toWeb = function () {
       let json = this.toJSON();
       return json;
   };
  return CompanyMember;
};