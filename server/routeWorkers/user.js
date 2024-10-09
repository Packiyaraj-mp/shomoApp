const sendToken = require("../utils/jwt");
const UserModel=require('../models/userShema');
const GlobalAsynErrorHandler = require("../middleWare/GlobalErrorHandler");
const GlobalError = require("../utils/errorClass");

exports.RegisterWorker= GlobalAsynErrorHandler(
       async(req,res,next)=>{
    
     if(req.body.password===req.body.confirmPassword){
        
            const user=await  UserModel.create({
                   name:req.body.name,
                   email:req.body.email,
                   password:req.body.password
          });
        sendToken(user,201,res);
        
     }else{
            res.status(400).json({
                   msg:'confirm password does not match',
                   user:null
               });  
     }
  
 });


 exports.LoginWorker= GlobalAsynErrorHandler(
 
   async(req,res,next)=>{
   console.log('hello')
      if(!req.body.password || !req.body.email){
        return next(new GlobalError('invalid credentials',400))
      }
      const user=await UserModel.findOne({email:req.body.email}).select('+password');
      
      if(!user){
        return next(new GlobalError('invalid Email or Password',400))
      }
      if(!user.isValidPassword){
        return next(new GlobalError('invalid Email or Password',400))
      }

     
      sendToken(user,201,res);
   

});

exports.getProfile=GlobalAsynErrorHandler(
  
  async(req,res,next)=>{
       const user=await UserModel.findById(req.user.id);
      
       res.status(200).json({
             success:true,
             user
       })
  }
)




 