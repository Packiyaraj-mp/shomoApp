const jwt=require('jsonwebtoken');
const GlobalError = require('../utils/errorClass');
const GlobalAsynErrorHandler = require('./GlobalErrorHandler');
const UserModel = require('../models/userShema');

exports.authenticatedUser=GlobalAsynErrorHandler(async(req,res,next)=>{

    const token=req.cookies.mycookie;
 
    if(!token){
      return next(new GlobalError('Login first to handle this request'))
    }
     const decode=jwt.verify(token,process.env.JWT_TOKEN_SECRET_KEY);
   
     req.user=await UserModel.findById(decode.id);
  
     next();
});