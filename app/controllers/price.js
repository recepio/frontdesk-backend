'use strict';
const DescriptionService  = require('../services/area-resources-price');
const {to, ReE, ReS} = require('../utils/await-async-sequelize');

class priceController{
    async create(req, res){
        let err, data, price;
        data = req.body;

        [err, price] = await to(DescriptionService.createPrice(data));

        if(err) return ReE(res, err, 500);
        return ReS(res, {message:'Successfully created price for resource', price:price}, 201);
    }
}

module.exports = () => {
    return new priceController();
}