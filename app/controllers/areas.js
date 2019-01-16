'use strict';
const DescriptionService  = require('../services/area-resources-price');
const {to, ReE, ReS} = require('../utils/await-async-sequelize');

class areasController {

    async createUpdate (req, res) {
        let err, data, area;
        data = req.body;

        [err, area] = await to(DescriptionService.createUpdateArea(data));

        if(err) return ReE(res, err, 500);
        return ReS(res, {message:'Successfully created area within workspace', area:area}, 201);
    }

    async fetch (req, res) {
        let err, data, areas;
        data = req.company;

        [err, areas] = await to(DescriptionService.getArea(data));

        if(err) return ReE(res, err, 500);
        return ReS(res, {message:'areas', areas:areas}, 201);
    }

    async remove (req, res) {
        let err, id, area;
        id = req.query.id;

        [err, area] = await to(DescriptionService.removeArea(id));

        if(err) return ReE(res, err, 500);
        return ReS(res, {message:'Successfully removed area from workspace', area:area}, 400);
    }
}

module.exports = () => {
    return new areasController()
}