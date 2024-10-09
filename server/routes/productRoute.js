const GlobalAsynErrorHandler = require('../middleWare/GlobalErrorHandler');
const BusModel = require('../models/productShema');
const { product, getProducts } = require('../routeWorkers/product');

const router=require('express').Router();

router.route('/getBus').post(getProducts);

router.route('/getbusDetail/:id').get(GlobalAsynErrorHandler(async(req,res,next)=>{
  const bus= await BusModel.findById(req.params.id);
        console.log(req.params.id);
        res.status(200).json({
            data:bus
        })
}));

module.exports=router;
