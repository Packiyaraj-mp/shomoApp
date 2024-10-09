const OrderId = require('../models/orderIdShema');
const OrderModel = require('../models/orderShema');
const PaymentModel = require('../models/paymentShema');
const BusModel = require('../models/productShema');
const GlobalError = require('../utils/errorClass');

const Stripe=require('stripe');

const stripe=new Stripe('sk_test_51PMP4XFXjloHwZvwkiT5WH9RrcvUqTy0I9KI2n0WN6ErMNxb6slVpNAwgmmeNyrgyPebHUZ2ax3Syym0DQdSuTh700EekGhw7J');



exports.paymentIntent=async(req,res,next)=>{
   console.log('hell1');
      const {amount,currency}=req.body;
           try{
             
            const paymentIntent=await stripe.paymentIntents.create({
                 amount,
                 currency,
                 automatic_payment_methods:{
                   enabled:true
                 }
            });
          
            res.status(200).json({
               clientSecret:paymentIntent.client_secret,
            });

           }catch(err){
        
              return next(new GlobalError(err.message,500))
           }
};

exports.updatePaymentAndOrder=async(req,res,next)=>{
       let seatsList=[];
       const orderId=await OrderId.find();

       if(orderId.length<1){
         const newId= new OrderId({
                orderId:1
           });
          await newId.save()
       }else{
         orderId[0].orderId=orderId[0].orderId + 1;
          await orderId[0].save();

       }
      
       const getId=await OrderId.find();
       

       const payment= new PaymentModel({
                  orderId:getId[0].orderId,
                  userId:req.body.user._id,
                  amount:Number(req.body.total),
                  currency:'inr',
                  status:'succeed',
                  paymentIntentId:req.body.paymentIntent,
                  email:req.body.email,
                 
        });

       const pay=  await payment.save();

        req.body.seats.forEach(ele=>seatsList.push(ele._id));

        BusModel.findById(req.body.busId).then(async (user)=>{
        
        user.seats.map(doc=>{
            if(seatsList.includes(String(doc._id)))
            doc.isAvailable=false;

         });
        const res=await user.save();
      
     });

    const order= new OrderModel({
           user:req.body.user._id,
           products:req.body.seats.map(ele=>({
                   product:ele._id,
                   seatNumber:ele.seatNumber,
                   price:ele.fare
                   
           })),
           totalPrice:req.body.total,
           paymentStatus:'completed',
           paymentMethod:req.body.paymentMethod,
           emailAddress:req.body.email,
           orderStatus:'completed'

     });
    const orderdetails=await order.save();


    console.log(res);
    console.log(orderdetails);

       
}