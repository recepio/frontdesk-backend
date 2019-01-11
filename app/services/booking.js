const { BookingDetail, BookingDetailLocation, ResourceAllocationQueue, BookingSummary } 	    = require('../models');
const { to, TE }    = require('../utils/await-async-sequelize');

const createBookingSummary = async(data) => {
    let err, summary;
    [err, summary] = await to(BookingSummary.create(data));
    if(err) TE(err.message);

    return summary;
};
module.exports.createBookingSummary = createBookingSummary;

const updateBookingSummary = async(data, id) => {
    let err, summary, updatedSummary;

    [err, summary] = await to(BookingSummary.findById(id));
    if(!summary) TE(`Booking summary with id ${id} not found`);

    summary.set(data);
    updatedSummary = await to(summary.save());
    return updatedSummary;
};
module.exports.updateBookingSummary = updateBookingSummary;

const createBookingDetail = async(data) => {
    let err, detail;
    [err, detail] = await to(BookingDetail.create(data));
    if(err) TE(err.message);

    return detail;
};
module.exports.createBookingDetail = createBookingDetail;

const updateBookingDetail = async(data, id) => {
    let err, detail, updatedDetail;

    [err, detail] = await to(BookingDetail.findById(id));
    if(!detail) TE(`Booking summary with id ${id} not found`);

    detail.set(data);
    updatedDetail = await to(detail.save());
    return updatedDetail;
}
module.exports.updateBookingDetail = updateBookingDetail;

const createBookingDetailLocation = async(data) => {
    let err, location;
    [err, location] = await to(BookingDetailLocation.create(data));
    if(err) TE(err.message);

    return location;
};
module.exports.createBookingDetailLocation = createBookingDetailLocation;

const updateBookingDetailLocation = async() => {
    let err, location, updatedLocation;

    [err, location] = await to(BookingDetailLocation.findById(id));
    if(!location) TE(`detail location with id ${id} not found`);

    location.set(data);
    updatedLocation = await to(location.save());
    return updatedLocation;
};
module.exports.updateBookingDetailLocation = updateBookingDetailLocation;

const createResourceAllocationQueue = async(data) => {
    let err, queue;
    [err, queue] = await to(ResourceAllocationQueue.create(data));
    if(err) TE(err.message);

    return queue;
};
module.exports.createResourceAllocationQueue = createResourceAllocationQueue;

const updateResourceAllocationQueue = async() => {
    let err, queue, updatedQueue;

    [err, queue] = await to(ResourceAllocationQueue.findById(id));
    if(!queue) TE(`resource queue with id ${id} not found`);

    queue.set(data);
    updatedQueue = await to(summary.save());
    return updatedQueue;
};
module.exports.updateResourceAllocationQueue = updateResourceAllocationQueue;