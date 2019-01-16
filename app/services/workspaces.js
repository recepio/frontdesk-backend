'use strict';
const { Company, CompanyMember } = require('../models');
const { to, TE } = require('../utils/await-async-sequelize');

module.exports = {
    async createCompany(user,companyInfo){
        let err, company;
        [err, company] = await to(Company
            .create({
                ...companyInfo,
                users: {email: user.dataValues.email, position: 'owner'},
            }, {
                include: [{
                    model: CompanyMember,
                    as: 'users'
                }]
            }));
        if(err) TE(err.message);

        let companyJson = company;
        companyJson.users = [{user:user}];

        return companyJson;
    },

    async addUserByCompanyId (user) {
        let err, companyMember, company;

        [err, companyMember] = await to(CompanyMember.create(user));
        if(err) TE(err.message);

        [err,company] = await to(Company.findByPk(user.companyUuid,{
            include: [{
                model: CompanyMember,
                as: 'users'
            }]
        }));
        if(err) TE(err.message);

        return company;
    },

    async removeCompany(companyId){
        let company, err;
        [err, company] = await to(Company.findOne({where:{id:companyId}}));
        if(!company) TE('could not find workspace with id ' + companyId);
        if(err) TE('error locating company');

            [err, user] = await to(company.destroy());
        if(err) TE(`error removing workspace with id ${companyId} `)

        return company;
    },

    async  removeUser (userId) {
        let user, err;
        [err, user] = await to(CompanyMember.findOne({where:{id:userId}}));
        if(err) TE('error locating workspace user');
        if(!user) TE('could not find workspace member with id ' + userId);

        [err, user] = await to(user.destroy());
        if(err) TE(`error removing user with id ${userId} from workspace `)

        return user;
    },

    async getUserCompanies (user) {
        let err, companyUsers;

        [err, companyUsers] = await to(CompanyMember.findAll(
            {where:{email:user.dataValues.email}}));
        let companiesJson =[]
        for(let i in companyUsers){
            let companyUser = companyUsers[i];
            let company;
            [err, company] = await to(companyUser.getCompany());
            if(err) console.log(err.message);
            companiesJson.push(company);
        }

        if(err) TE(err.message);
        return companiesJson;
    },

    async getCompanyUsers (company) {
        let users, err;

        [err, users] = await to(company.getUsers())
        if(err) TE(err.message);

        return users;
    }
}