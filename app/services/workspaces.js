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

    async addUserByCompanyId (user, companyId) {
        let err, company;

        [err, company] = await to(Company.findOne({where:{id:companyId}}));
        if(err) return TE('error finding company');
        if(!company) TE('cannot add user to company, no company was found with id '+ companyId);

        company.addUser(user);
        [err, company] = await to(company.save());
        if(err) return TE('error adding user to company with id ' + companyId );

        let companyJson = company.toWeb();
        companyJson.users = [{user:user}];

        return companyJson;
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
            [err, company] = await to(companyUser.getCompany({include: [ {association: Company.Users} ] }));
            if(err) console.log(err.message);
            companiesJson.push(company);
        }

        if(err) TE(err.message);
        return companiesJson;
    },

    async getCompanyUsers (companyId) {
        let company, err;

        [err, company] = await to(Company.findById(companyId, {
            include: [{
                model: CompanyMember,
                as: 'users'
            }],
        }))
        if(err) TE('error locating company');
        if(!company) TE(`company with id ${companyId} not found`);

        return company.toWeb();
    }
}