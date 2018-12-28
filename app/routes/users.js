const express 			= require('express');
const router 			= express.Router();
const { validate }      = require('../utils/user-validations');
const UsersController  = require('../controllers/users')();

router.post('/login', validate('user'), UsersController.login );

router.post('/signup', validate('user'), UsersController.signUp );

module.exports = router;