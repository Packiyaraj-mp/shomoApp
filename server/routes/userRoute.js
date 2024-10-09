const router=require('express').Router();
const { authenticatedUser } = require('../middleWare/authenticateUser');
const {RegisterWorker,LoginWorker, getProfile}=require('../routeWorkers/user')


// user routes
router.route('/register').post(RegisterWorker);
router.route('/login').post(LoginWorker);
router.route('/getProfile').get(authenticatedUser,getProfile);

module.exports=router;