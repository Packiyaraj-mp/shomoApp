const mongoose=require('mongoose');
const jwt=require('jsonwebtoken');
const bcrypt=require('bcrypt');

const UserSchema=new mongoose.Schema({
        name:{
        type: String,
        required:['please enter name',true]
        },
        email:{
        type:String,
        required:['please enter email',true],
        unique:true
        },
        password:{
        type:String,
        required:['please enter password',true],
        select:false
        },
        resetPasswordToken:{
                type:String
        },
        resetPasswordTokenExpire:{
                type:Date
        }     
});
UserSchema.pre('save',async function(next){
        if(!this.isModified('password')){
                next()
        }
        this.password=await bcrypt.hash(this.password,10);

});

UserSchema.methods.getJwtToken=function(){
   return  jwt.sign({id:this.id},process.env.JWT_TOKEN_SECRET_KEY,{
        expiresIn:process.env.JWT_TOKEN_EXPIRES_TIME
     })
};

UserSchema.methods.isValidPassword=function(EnteredPassword){
    return bcrypt.compare(EnteredPassword,this.password)
};

const UserModel=mongoose.model('User',UserSchema);

module.exports=UserModel;

