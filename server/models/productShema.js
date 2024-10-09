const { default: mongoose } = require("mongoose");




const pointShema=new mongoose.Schema({
   place:{type:String,required:true},
   points:[
      {
        name:{type:String,required:true},
        address:{type:String,required:true},
        time:{type:String,required:true}
      }
   ]
   
});


const seatShema=new mongoose.Schema({
     seatNumber:{type:String,required:true},
     isAvailable:{type:Boolean,required:true,default:true},
     seatType:{type:String},
     fare:{type:Number,required:false}
});

const BusShema=new mongoose.Schema({
     busName:{type:String,required:true},
     busNumber:{
        type:String,
        required:true
     },
     busType:{type:String,required:true},
     date:{type:String,required:true},
     routeName:{type:String,required:true},
     outDate:{type:String,required:true},
     departureTime:{type:String,required:true},
     arrivalTime:{type:String,required:true},
     fare:{type:Number,required:true},
     totalSeats:{type:Number, required:true},
     availableSeats:{type:Number,required:true},
     bordingPointsAndPlace:[pointShema],
     droppingPointsPlace:[pointShema],
     seats:[seatShema],
     rating:{
      rating:{type:Number,default:0},
      raters:{type:Number,default:0}
     },
     timePeriod:String

});

const BusModel=mongoose.model('bus',BusShema);

 module.exports=BusModel;