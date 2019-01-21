const express 			= require('express');
const router 			= express.Router();
const areaController  = require('../controllers/areas')();
const resourceController  = require('../controllers/resources')();
const priceController = require('../controllers/price')();
const clientController = require('../controllers/bookings')();

const workspace 	        = require('../middlewares/workspace');
const passport      	= require('passport');
require('../middlewares/passport')(passport);

router.post('/area', passport.authenticate('jwt', {session:false}), workspace.workspace, areaController.createUpdate );
router.get('/area', passport.authenticate('jwt', {session:false}), workspace.workspace, areaController.fetch );
router.delete('/area', passport.authenticate('jwt', {session:false}), workspace.workspace, areaController.remove );

router.post('/resource', passport.authenticate('jwt', {session:false}), workspace.workspace, resourceController.create );
router.post('/resource-description', passport.authenticate('jwt', {session:false}), workspace.workspace, resourceController.createDescription );
router.post('/resource-price', passport.authenticate('jwt', {session:false}), workspace.workspace, priceController.create );
router.post('/client', passport.authenticate('jwt', {session:false}), workspace.workspace, clientController.createClient );

module.exports = router;