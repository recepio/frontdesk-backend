'use strict';
const authService = require('../services/auth');
const {to, ReE, ReS} = require('../utils/await-async-sequelize');
const { validationResult } = require('express-validator/check')



class userController{

    async signUp(req, res) {
        const body = req.body;
        const result = validationResult(req);
        if(!result.isEmpty()) return ReE(res, result.array(), 500);

        let err, user;

        [err, user] = await to(authService.createUser(body));

        if(err) return ReE(res, err, 500);
        return ReS(res, {message:'Successfully created new user.', user:user.toWeb(), token:user.getJWT()}, 201);
  }

  async login(req, res, next) {
        const body = req.body;
        const result = validationResult(req);
        if(!result.isEmpty()) return ReE(res, result.array(), 500);

        let err, user;

        [err, user] = await to(authService.authUser(body));
        if(err) return ReE(res, err, 500);

        return ReS(res, {token:user.getJWT(), user:user.toWeb()});
  }
}

module.exports = () => {
    return new userController()
}