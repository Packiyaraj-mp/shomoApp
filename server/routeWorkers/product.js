const GlobalAsynErrorHandler = require("../middleWare/GlobalErrorHandler");
const BusModel = require("../models/productShema");

exports.getProducts=GlobalAsynErrorHandler(async(req,res,next)=>{
    const bus= await BusModel.find({routeName:`${req.body.fromSource} - ${req.body.toSource}`,date:{$gte:req.body.date}},
    ).limit(8);
 console.log(req.body.date)
    console.log(bus)
      res.status(201).json({
           aviBus:bus,
           success:true
      });
  });