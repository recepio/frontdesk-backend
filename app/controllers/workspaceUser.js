'use strict';
const {to, ReE, ReS} = require('../utils/await-async-sequelize');
const { getUserCompanies, addUserByCompanyId, removeUser } = require('../services/workspaces');

class workspaceUserController {

    async add(req, res) {
        let user, companyId, companyUser;
        user = req.body;
        companyId = req.query.companyId;
        [err, companyUser] = await to(addUserByCompanyId(user, companyId));

        if(err) return ReE(res, err, 500);
        return ReS(res, {message:'Successfully added user to workspace', user:companyUser}, 201);
    }

    async remove (req, res) {
        let err, user;
        [err, user] = await to(removeUser(req.query.userId));

        if(err) return ReE(res, err, 500);
        return ReS(res, {message:'Successfully added user to workspace', user:user}, 201);
    }

    async getCompanies (req, res) {
        let err, userCompanies, user;
        user = req.user;
        [err, userCompanies] = await to(getUserCompanies(user));

        if(err) return ReE(res, err, 500);
        return ReS(res, {message:'retrieved users', user:user.toWeb() , users:userCompanies}, 201);
    }
}

module.exports = () => {
    return new workspaceUserController()
}