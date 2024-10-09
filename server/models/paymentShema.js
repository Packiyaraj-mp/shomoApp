const mongoose=require('mongoose');

const paymentShema=new mongoose.Schema({
      userId:{
        type:mongoose.Types.ObjectId,
        required:true
      },
      orderId:{
        type:Number,
        required:true,
        unique:true,
        
      },
      email:{
        type:String,
        required:true
      },
      amount:{
        type:Number,
        required:true
      },
      currency:{
        type:String,
        required:true
      },
      status:{
        type:String,
        enum:[
            'pemding',
            'succeed',
            'failed'
        ],
        default:'pending'
      },
      paymentIntentId:{
        type:String,
        default:Date.now,
      },
      createdAt:{
        type:Date,
        default:()=>Date.now()
      },
      updatedAt:{
        type:Date,
        default:()=>Date.now()
      }
});

paymentShema.pre('save',function(next){
     this.updatedAt=Date.now();
     next()
});

const PaymentModel=mongoose.model('Payment',paymentShema);
module.exports=PaymentModel;

