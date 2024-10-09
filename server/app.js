const express=require('express');
const bodyParser=require('body-parser');
const cors=require('cors');
const cookieParser=require('cookie-parser');
const ErrorMiddleWare = require('./middleWare/ErrorMiddleWare');
// app set
const app=express();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use(cors());
app.use(cookieParser());

const userRoutes=require('./routes/userRoute');
const productRoute=require('./routes/productRoute');
const payment=require('./routes/payementRoute');

app.use('/',userRoutes);
app.use('/',productRoute);
app.use('/',payment);

app.use(ErrorMiddleWare);
module.exports=app;


