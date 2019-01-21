'use strict';
const BookingService  = require('../services/booking');
const {to, ReE, ReS} = require('../utils/await-async-sequelize');

class bookingsController {
    async createClient(req, res){
        let err, data, client;
        data = req.body;

        [err, client] = await to(BookingService.createClient(data));

        if(err) return ReE(res, err, 500);
        return ReS(res, {message:'Sucessfully registered client', client:client}, 201);
    }
}

module.exports = () => {
    return new bookingsController()
}