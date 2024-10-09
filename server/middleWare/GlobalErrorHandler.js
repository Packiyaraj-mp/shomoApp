const GlobalAsynErrorHandler=(fun)=>(req,res,next)=>Promise.resolve(fun(req,res,next)).catch(next);

module.exports=GlobalAsynErrorHandler;