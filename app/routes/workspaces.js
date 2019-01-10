const express 			= require('express');
const router 			= express.Router();
const { validate }      = require('../utils/user-validations');
const workSpaceController  = require('../controllers/workspaces')();
const workSpaceUsersController = require('../controllers/workspaceUser')();

const workspace 	        = require('../middlewares/workspace');
const passport      	= require('passport');
require('../middlewares/passport')(passport);



router.post('', passport.authenticate('jwt', {session:false}), workSpaceController.create );
router.get('/users', passport.authenticate('jwt', {session:false}), workspace.workspace, workSpaceController.users );
router.delete('', passport.authenticate('jwt', {session:false}), workspace.workspace, workSpaceController.remove );

router.post('/user', passport.authenticate('jwt', {session:false}), workSpaceUsersController.add );
router.get('/user/companies', passport.authenticate('jwt', {session:false}), workSpaceUsersController.getCompanies );
router.delete('/user', passport.authenticate('jwt', {session:false}), workspace.workspace, workSpaceUsersController.remove );


module.exports = router;