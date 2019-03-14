const { Area, Resource, ResourceDescription, BookingSummary, Price, BookingDetail } 	    = require('../models');
const { to, TE }    = require('../utils/await-async-sequelize');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

const createUpdateArea = async(data) => {
    let err, area;

    [err, area] = await to(Area.findByPk(data.id));

    if(!area) {
        [err, area] = await to(Area.create(data));
        if(err) TE(err.message);
        return area;
    }

    [err, area] = await to(area.update(data));
    if(err) TE(err.message);

    return area;
};
module.exports.createUpdateArea = createUpdateArea;

const getArea = async(company) => {
    let err, areas;

    [err, areas] = await to(company.getAreas({include: [
            {
                association: Area.Resources,
                include: [
                    {association: Resource.Descriptions},
                    {association: Resource.Prices},
                    {association: Resource.Details}
                ]
            }
        ]
    }));
    if(err) TE(err.message);

    return areas;
};
module.exports.getArea = getArea;

const removeArea = async(id) => {
    let err, area, removedArea;

    [err, area] = await to(Area.findById(id));
    if(!area) TE(`Area with id ${id} not found`);

    removedArea = await to(area.destroy());
    return removedArea;
};
module.exports.removeArea = removeArea;

const getCompanyAreas = async (company) => {
    let err, areas;
    [err, areas] = await to(company.getAreas({
        include: [
            {
                model: Resource,
                include: [
                    Price, BookingSummary, ResourceDescription
                ]
            },
        ]
    }));
    if(err) TE(err.message);
    return areas
}
module.exports.getCompanyAreas = getCompanyAreas;

const createResource = async(data) => {
    let err, resource;

    [err, resource] = await to(Resource.findByPk(data.id));

    if(!resource) {
        [err, resource] = await to(Resource.create(data));
        if(err) TE(err.message);
        return resource;
    }

    [err, resource] = await to(Resource.update(data));
    if(err) TE(err.message);

    return resource;
};
module.exports.createResource = createResource;

const getFreeResource = async (data) => {
    let err, resources, bookings, resourceIds;
    console.log(data);
    [err, bookings] = await to(BookingDetail.findAll({
        where: {
            [Op.and]: [
                {
                    dateFrom: {
                        [Op.gte]: data.dateFrom
                    },
                    dateTo: {
                        [Op.gte]: data.dateFrom
                    }
                },
                {
                    dateTo: {
                        [Op.lte]: data.dateTo
                    }
                }
            ]
        }
    }));
    resourceIds = bookings.map(obj=>obj.dataValues.resourceId);
    [err, resources] = await to(Resource.findAll({
        where: {
            id: {
                [Op.notIn]: resourceIds
            }
        }
    }));
    if(err) TE(err.message);

    return resources;
}
module.exports.getFreeResource = getFreeResource;


const removeResource = async(id) => {
    let err, resource, removedArea;

    [err, resource] = await to(Resource.findById(id));
    if(!resource) TE(`Resource with id ${id} not found removeResource method`);

    removedArea = await to(resource.destroy());
    return removedArea;
};
module.exports.removeResource = removeResource;

const createDescription = async(data) => {
    let err, description;
    [err, description] = await to(ResourceDescription.create(data));
    if(err) TE(err.message);

    return description;
};
module.exports.createDescription = createDescription;

const removeDescription = async(id) => {
    let err, description, removedDescription;

    [err, description] = await to(ResourceDescription.findById(id));
    if(!description) TE(`Area with id ${id} not found`);

    removedDescription = await to(area.destroy());
    return removedDescription;
};
module.exports.removeDescription = removeDescription;

const createPrice = async(data) => {
    let err, price;

    [err, price] = await to(Price.findByPk(data.id));

    if(!price) {
        [err, price] = await to(Price.create(data));
        if(err) TE(err.message);
        return price;
    }

    [err, price] = await to(price.update(data));
    if(err) TE(err.message);

    return price;
};
module.exports.createPrice = createPrice;

const updatePrice = async(data, id) => {
    let err, price, updatedPrice;

    [err, price] = await to(Price.findById(id));
    if(!price) TE(`price with id ${id} not found`);

    price.set(data);
    updatedPrice = await to(area.save());
    return updatedPrice;
};
module.exports.updatedPrice = updatePrice;

const removePrice = async(id) => {
    let err, price, removedPrice;

    [err, price] = await to(ResourceDescription.findById(id));
    if(!price) TE(`Price with id ${id} not found`);

    removedPrice = await to(price.destroy());
    return removedPrice;
};
module.exports.removePrice = removePrice;