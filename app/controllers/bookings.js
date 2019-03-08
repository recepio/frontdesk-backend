'use strict';
const BookingService  = require('../services/booking');
const DescriptionService  = require('../services/area-resources-price');
const {to, ReE, ReS} = require('../utils/await-async-sequelize');

class bookingsController {
    async createClient(req, res){
        let err, data, client;
        data = req.body;

        [err, client] = await to(BookingService.createClient(data));

        if(err) return ReE(res, err, 500);
        return ReS(res, {message:'Sucessfully registered client', client:client}, 201);
    }

    async createBooking(req, res) {
        let err, data, summary, detail;
        data = req.body;

        [err, summary] = await to(BookingService.createBookingSummary(req.company));

        if(err) return ReE(res, err, 500);
        [err, detail] = await to(BookingService.createBookingDetail(summary, data));
        return ReS(res, {message:'Sucessfully registered client', detail:detail}, 201);
    }

    async fetchBookings(req, res) {
        let err, bookings;

        [err, bookings] = await to(BookingService.getCompanyBookings(req.company));

        if(err) return ReE(res, err, 500);
        return ReS(res, {message:'areas', areas:areas}, 201);
    }

    async fetchFreeResources(req, res) {
        let err, data, areas;
        data = req.body;

        [err, areas] = await to(DescriptionService.getFreeResource(data));

        if(err) return ReE(res, err, 500);
        return ReS(res, {message:'resources', resources:areas}, 201);
    }
}

module.exports = () => {
    return new bookingsController()
}