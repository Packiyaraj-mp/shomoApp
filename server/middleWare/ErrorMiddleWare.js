const ErrorMiddleWare=(err,req,res,next)=>{
     err.statusCode=err.statusCode || 500;

     let message=err.message;
     let error=new Error(message);

     if(err.name =="ValidationError"){
            
        message=Object.values(err.errors).map(value=>value.message);
        error=new Error(message);
        err.statusCode=400;
      

    }
    if(err.name == 'CastError'){
        message=`Resorce not found: ${err.path}`;
        error=new Error(message);
        err.statusCode=400;

    }
    if(err.code == 11000){
        let message=`Dublicate ${Object.keys(err.keyValue)} error`;
        error=new Error(message);
        err.statusCode=400;
       
    }
    if(err.name=='JSONWebTokenError'){
          let message=`JSON Web Token is invalid.Try again`;
          error=new Error(message);
          err.statusCode=400;

    }

     return res.status(err.statusCode).json({
         success:false,
         msg:error.message || 'internal server error'
      })
};

module.exports=ErrorMiddleWare;