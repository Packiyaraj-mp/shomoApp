const mongoose=require('mongoose');


const orderShema=new mongoose.Schema({
      user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true
      },
      products:[
        {
        product:{
            type:mongoose.Schema.Types.ObjectId,
            ref:'Product',
            required:true
         },
         seatNumber:{
           type:String,
           required:true,
          
         },
         price:{
           type:Number,
           required:true
         }

        }

      ],
      totalPrice:{
        type:Number,
        required:true
      },
      paymentStatus:{
         type:String,
         enum:['pending','completed','failed'],
         default:'pending',

      },
      paymentMethod:{
        type:String,
        enum:['card','razorpay','stripe','paypal'],
        required:true
      },
      emailAddress:{
        type:String,
        required:true
      },
      orderStatus:{
        type:String,
        enum:['pending','cancelled','completed'],
        default:'processing'
      },
      craetedAt:{
        type:Date,
        default:Date.now
      }
     
});

const OrderModel=mongoose.model('Order',orderShema);

module.exports=OrderModel;
