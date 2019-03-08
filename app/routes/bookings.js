const express 			= require('express');
const router 			= express.Router();
const { validate }      = require('../utils/user-validations');
const bookingController  = require('../controllers/bookings')();

const workspace 	        = require('../middlewares/workspace');
const passport      	= require('passport');
require('../middlewares/passport')(passport);



router.post('', passport.authenticate('jwt', {session:false}), workspace.workspace, bookingController.createBooking );
router.get('/', passport.authenticate('jwt', {session:false}), workspace.workspace, bookingController.fetchBookings );
router.post('/search', passport.authenticate('jwt', {session:false}), workspace.workspace, bookingController.fetchFreeResources );



module.exports = router;