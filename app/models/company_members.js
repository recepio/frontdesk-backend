'use strict';
module.exports = (sequelize, DataTypes) => {
  const CompanyMember = sequelize.define('CompanyMember', {
      email     : {type: DataTypes.STRING, allowNull: true, unique: 'uniqueTag', validate: { isEmail: {msg: "invalid email address"} }},
      password  : DataTypes.STRING,
      position  : DataTypes.STRING,
      companyUuid : {type: DataTypes.UUID, unique: 'uniqueTag'}
  }, {});
    CompanyMember.associate = function(models) {
        CompanyMember.company = CompanyMember.belongsTo(models.Company, {
            foreignKey: 'companyUuid',
            as: 'company'
        });
  };
  CompanyMember.prototype.toWeb = function () {
       let json = this.toJSON();
       return json;
   };
  return CompanyMember;
};