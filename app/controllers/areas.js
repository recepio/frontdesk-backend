'use strict';
const DescriptionService  = require('../services/area-resources-price');
const {to, ReE, ReS} = require('../utils/await-async-sequelize');

class areasController {

    async create (req, res) {
        let err, data, area;
        data = req.body;

        [err, area] = await to(DescriptionService.createArea(data));

        if(err) return ReE(res, err, 500);
        return ReS(res, {message:'Successfully created area within workspace', area:area}, 201);
    }

    async update (req, res) {
        let err, data, area, id;
        data = req.body;
        id = req.query.id;

        [err, area] = await to(DescriptionService.updateArea(id,data));

        if(err) return ReE(res, err, 500);
        return ReS(res, {message:'Successfully updated area within workspace', area:area}, 201);
    }

    async remove (req, res) {
        let err, id, area;
        id = req.query.id;

        [err, area] = await to(DescriptionService.removeArea(id));

        if(err) return ReE(res, err, 500);
        return ReS(res, {message:'Successfully updated area within workspace', area:area}, 400);
    }
}

module.exports = () => {
    return new areasController()
}