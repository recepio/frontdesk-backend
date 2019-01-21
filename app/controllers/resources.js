'use strict';
const DescriptionService  = require('../services/area-resources-price');
const {to, ReE, ReS} = require('../utils/await-async-sequelize');

class resourcesController{
    async create(req, res){
        let err, data, resource;
        data = req.body;

        [err, resource] = await to(DescriptionService.createResource(data));

        if(err) return ReE(res, err, 500);
        return ReS(res, {message:'Successfully created resource within section', resource:resource}, 201);
    }

    async createDescription(req, res){
        let err, data, description;
        data = req.body;

        [err, description] = await to(DescriptionService.createDescription(data));

        if(err) return ReE(res, err, 500);
        return ReS(res, {message:'Successfully created resource description', description:description}, 201);
    }

    async removeDescription(req, res){

    }

    async fetchResources(req, res){

    }

    async removeResource(req, res){

    }
}

module.exports = () => {
    return new resourcesController();
}