const path=require('path');
const dbConnection = require('./config/db_connection');
const dotEnv=require('dotenv');
const app = require('./app');
const BusModel = require('./models/productShema');
// dotenv config
dotEnv.config({path:path.join(__dirname,'/config/config.env')});
// db connection
dbConnection();





const createSeats=(numOfSeats)=>{
    const seats=[];
    const  rows=['A','B','C','D','E','F','G'];
    let seatCount=0;

    for(let i=0; i<rows.length && seatCount <numOfSeats;i++){
        for(let j=1; j<=3 && seatCount<numOfSeats;j++){
            seats.push({
                seatNumber:`${rows[i]}${j}`,
                isAvailable:true,
                seatType:(j===1 || j===3)?'Window':'Aisle',
                fare:700
            });
            seatCount++
        }
    }
    return seats;

}

   function startCraete(){
    BusModel.create(
        {
            busName:"GEMINI Travels",
            busNumber:'TN1923',
            busType:'Ac Sleeper',
            date:'18-10-2024',
            outDate:'19-10-2024',
            routeName:'kovai - chennai',
            departureTime:'8 PM',
            arrivalTime:'3:00 AM',
            totalSeats:20,
            availableSeats:20,
            fare:900,
            bordingPointsAndPlace:
            [
               {
                place:'bangalore',
                points:[
                    {
                        name:'kovai',
                        address:'kovaiomni bus stop',
                        time:'8:45 pm'
                    },
    
                    {
                        name:'mejastic',
                        address:'Sheela Theatre Opposite',
                        time:'9:00 AM'
                    },
                  
                   ]
               }
              
    
            ],
            droppingPointsPlace:[
                {
                    place:'madurai',
                    points:[
                        {
                            name:'mattuthavani Bus Stand',
                            address:'main Bus Stand Velumani Hotel opposite',
                            time:'02:45 PM'
                        },
        
                        {
                            name:'kalavasal ',
                            address:'bus station Opposite',
                            time:'03:00 PM'
                        },
                      
                       ]
                   },
            ],
            seats:createSeats(20),
            timePeriod:"",
            rating:{
                rating:4,
                raters:5
            }
    
           }

    )
       
       .then(user=>console.log(user))

   }

// startCraete()
// app initialize



app.listen(8000,()=>{
    console.log('server is running on port number is 8000');
});
