'use strict';
const {to, ReE, ReS} = require('../utils/await-async-sequelize');
const DescriptionService  = require('../services/area-resources-price');
const {createCompany, removeCompany, getCompanyUsers} = require('../services/workspaces');


class workspaceController {

    async create (req, res) {
        let err, user, createData, company;
        user = req.user;
        createData = req.body;

        [err, company] = await to(createCompany(user, createData))

        if(err) return ReE(res, err, 500);
        return ReS(res, {message:'Successfully created workspace', workspace:company}, 201);
    }

    async remove (req, res) {
        let companyId, err, company;
        companyId = req.query.companyId;

        [err, company] = await to(removeCompany(companyId))
        if(err) return ReE(res, err, 500);
        return ReS(res, {message:'Successfully created workspace', workspace:company}, 400);

    }

    async users ( req, res) {
        let users,err, areas;

        [err,users] = await to(getCompanyUsers(req.company));

        if(err) return ReE(res, err, 500);
        [err, areas] = await to(DescriptionService.getArea(req.company));

        if(err) return ReE(res, err, 500);
        return ReS(res, {message:'workspace users', users:users, areas: areas}, 201);
    }
}

module.exports = () => {
    return new workspaceController()
}