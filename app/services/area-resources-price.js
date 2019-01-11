const { Area, Resource, ResourceDescription, Price } 	    = require('../models');
const { to, TE }    = require('../utils/await-async-sequelize');

const createArea = async(data) => {
    let err, area;
    [err, area] = await to(Area.create(data));
    if(err) TE(err.message);

    return area;
};
module.exports.createArea = createArea;

const updateArea = async(data, id) => {
    let err, area, updatedArea;

    [err, area] = await to(Area.findById(id));
    if(!area) TE(`Area with id ${id} not found`);

    area.set(data);
    updatedArea = await to(area.save());
    return updatedArea;
};
module.exports.updateArea = updateArea;

const removeArea = async(id) => {
    let err, area, removedArea;

    [err, area] = await to(Area.findById(id));
    if(!area) TE(`Area with id ${id} not found`);

    removedArea = await to(area.destroy());
    return removedArea;
};
module.exports.removeArea = removeArea;

const createResource = async(data) => {
    let err, resource;
    [err, resource] = await to(Resource.create(data));
    if(err) TE(err.message);

    return resource;
};
module.exports.createResource = createResource;

const updateResource = async(data, id) => {
    let err, resource, updatedDetail;

    [err, resource] = await to(Resource.findById(id));
    if(!resource) TE(`Resource with id ${id} not found`);

    resource.set(data);
    updatedDetail = await to(resource.save());
    return updatedDetail;
};
module.exports.updateResource = updateResource;

const removeResource = async(id) => {
    let err, resource, removedArea;

    [err, resource] = await to(Resource.findById(id));
    if(!resource) TE(`Resource with id ${id} not found removeResource method`);

    removedArea = await to(resource.destroy());
    return removedArea;
};
module.exports.removeResource = removeResource;
