const { User } 	    = require('../models');
const { to, TE }    = require('../utils/await-async-sequelize');

const createUser = async (userInfo) => {
    let err,user;

    [err, user] = await to(User.create(userInfo));
    if(err) TE('user already exists with that email');

    return user;

}
module.exports.createUser = createUser;

const authUser = async function(userInfo){

    let user;

    [err, user] = await to(User.findOne({where:{email:userInfo.email}}));
    if(err) TE(err.message);

    if(!user) TE('Not registered');

    [err, user] = await to(user.comparePassword(userInfo.password));

    if(err) TE(err.message);

    return user;

}
module.exports.authUser = authUser;