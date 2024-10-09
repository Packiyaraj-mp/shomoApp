const sendToken=(user,statusCode,res)=>{
   const token= user.getJwtToken();

    res.status(statusCode).json({
    msg:'successfully created',
    user:user,
    token:token
});  
}

module.exports=sendToken;