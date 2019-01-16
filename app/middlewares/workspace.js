'use strict';
const { Company, CompanyMember } = require('../models');
const { to, ReE, ReS } = require('../utils/await-async-sequelize');


module.exports = {
    async workspace (req, res, next) {
        let companyId, err, company;
        companyId = req.query.companyId;

        [err, company] = await to(Company.findOne({where:{uuid:companyId}}));

        if(err) return ReE(res, err.message);

        if(!company) return ReE(res, "Company not found with id: "+companyId);
        let user, users_array, users;
        user = req.user;
        [err, users] = await to(company.getUsers());

        users_array = users.map(obj=>obj.dataValues.email);
        if(!users_array.includes(user.dataValues.email)) return ReE(res, "User does not have permission to this workspace "+companyId, 403);

        req.company = company;
        next();
    }
}