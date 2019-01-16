const express 			= require('express');
const router 			= express.Router();
const areaController  = require('../controllers/areas')();

const workspace 	        = require('../middlewares/workspace');
const passport      	= require('passport');
require('../middlewares/passport')(passport);

router.post('/area', passport.authenticate('jwt', {session:false}), workspace.workspace, areaController.createUpdate );
router.get('/area', passport.authenticate('jwt', {session:false}), workspace.workspace, areaController.fetch );
router.delete('/area', passport.authenticate('jwt', {session:false}), workspace.workspace, areaController.remove );

module.exports = router;