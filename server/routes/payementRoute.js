const router=require('express').Router();
const {updatePaymentAndOrder,paymentIntent} = require('../routeWorkers/payemt');



router.route('/paymentIntent').post(paymentIntent);
router.route('/paymentOrderUpdate').post(updatePaymentAndOrder);

module.exports=router;


