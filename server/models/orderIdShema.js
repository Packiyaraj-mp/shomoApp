const mongoose=require('mongoose');

const orderIdShema=new mongoose.Schema({
        authOrderId:{
           type:Number,
           
        },
       orderId:{
        type:Number,
        required:true
       }
});

const OrderId=mongoose.model('orderIdModel',orderIdShema);
 module.exports=OrderId;