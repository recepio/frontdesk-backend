'use strict';
const { Company, CompanyMember } = require('../models');
const { to, ReE, ReS } = require('../utils/await-async-sequelize');


module.exports = {
    async workspace (req, res, next) {
        let companyId, err, company;
        companyId = req.params.companyId;

        [err, company] = await to(Company.findOne({where:{id:companyId}}));
        if(err) return ReE(res, "err finding company for authorization");

        if(!company) return ReE(res, "Company not found with id: "+companyId);
        let user, users_array, users;
        user = req.user;
        [err, users] = await to(company.getUsers());

        users_array = users.map(obj=>String(obj.user));
        console.log(users_array);
        if(!users_array.includes(String(user.email))) return ReE(res, "User does not have permission to this workspace "+companyId);

        req.company = company;
        next();
    }
}