'use strict';
const bcrypt 			= require('bcrypt');
const bcrypt_p 			= require('bcrypt-promise');
const jwt           	= require('jsonwebtoken');
const {TE, to} = require('../utils/await-async-sequelize');

module.exports = (sequelize, DataTypes) => {
      const User = sequelize.define('User', {
        email     : {type: DataTypes.STRING, allowNull: true, unique: true, validate: { isEmail: {msg: "invalid email address"} }},
        password  : DataTypes.STRING,
      }, {
          classMethods: {
              associate: function(models) {
                  User.hasOne(models.Profile, {
                      foreignKey: 'userId',
                      as: 'profile',
                  });
              },
              comparePassword:  async function (pw) {
                  let err, pass
                  if(!this.password) TE('password not set');

                  [err, pass] = await to(bcrypt_p.compare(pw, this.password));
                  if(err) TE(err);

                  if(!pass) TE('invalid password');

                  return this;
              },
              getJWT: function () {
                  let expiration_time = parseInt(CONFIG.jwt_expiration);
                  return "Bearer "+jwt.sign({user_id:this.id}, CONFIG.jwt_encryption, {expiresIn: expiration_time});
              },
              toWeb: function () {
                  let json = this.toJSON();
                  delete json['password'];
                  return json;
              }
          }
      });



      User.beforeSave(async (user, options) => {
          let err;
          if (user.changed('password')){
              let salt, hash
              [err, salt] = await to(bcrypt.genSalt(8));
              if(err) TE(err.message, true);
              [err, hash] = await to(bcrypt.hash(user.password, salt));
              if(err) TE(err.message, true);
              user.password = hash;
          }
      });

  return User;
};