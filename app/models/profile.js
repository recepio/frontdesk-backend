'use strict';
module.exports = (sequelize, DataTypes) => {
  const Profile = sequelize.define('Profile', {
      phone     : {type: DataTypes.STRING, allowNull: true, unique: true, validate: { len: {args: [7, 20], msg: "Phone number invalid, too short."}, isNumeric: { msg: "not a valid phone number."} }},
      firstName: DataTypes.STRING,
      userId    : DataTypes.INTEGER,
      lastName: DataTypes.STRING,
      fullName:  {
          type     : DataTypes.STRING,
          allowNull: false,
          get      : function()  {
              return this.firstName + ' ' + this.lastName
          },
          set      : function(val) {
              var names = value.split(' ');
              this.setDataValue('firstName', names.slice(0, -1).join(' '));
              this.setDataValue('lastName', names.slice(-1).join(' '));
          }
      },
      address: DataTypes.TEXT
  }, {

  });
    Profile.associate = function(models) {
    // associations can be defined here
  };
  return Profile;
};