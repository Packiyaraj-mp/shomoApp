const BusModel = require("../models/productShema");



async function AddBusDetails(){
  
      const seedData=
      [
           {
            busName:"Shomo",
            busNumber:'KA1453',
            busType:'AC Sleeper',
            date:'31-9-2024',
            outDate:'1-10-2024',
            routeName:'bangalore - madurai',
            departureTime:'9:00 PM',
            arrivalTime:'06:00 AM',
            totalSeats:20,
            availableSeats:20,
            fare:700,
            bordingPointsAndPlace:
            [
               {
                place:'bangalore',
                points:[
                    {
                        name:'mejastic',
                        address:'Mejastic Sharma Hotel Opposite',
                        time:'09:45 PM'
                    },
    
                    {
                        name:'kalsipalaya',
                        address:'Kalasipalaya Adhira Hospital Opposite',
                        time:'09:00 PM'
                    },
                  
                   ]
               },
               {
                place:'ossur',
                boardingPoints:[
                    { name:'Main bus stand',
                      address:' Murugan Hotel Opposite',
                      time:'09:45 PM'
                    }
                 ]
               }
    
            ],
            droppingPointsPlace:[
                {
                    place:'madurai',
                    points:[
                        {
                            name:'Mattuthavani',
                            address:'Matti thavani bus stand',
                            time:'05:45 AM'
                        },
        
                        {
                            name:'Anna silai',
                            address:'railway station Opposite',
                            time:'06:00 AM'
                        },
                      
                       ]
                   },
            ],
            seats:createSeats(20)
    
           },
           {
            busName:"A.R.Travels",
            busNumber:'TN1453',
            busType:'Non-AC Sleeper',
            date:'2-10-2024',
            outDate:'3-10-2024',
            routeName:'trichi - kovai',
            departureTime:'5:00 PM',
            arrivalTime:'03:00 AM',
            totalSeats:20,
            availableSeats:20,
            fare:600,
            bordingPointsAndPlace:
            [
               {
                place:'trichi',
                points:[
                    {
                        name:'bus stop',
                        address:'Main Bus stop Vel Hotel Opposite',
                        time:'10:45 PM'
                    },
    
                    {
                        name:'Ganesh Theatre',
                        address:'Ganesh Theatre Opposite',
                        time:'11:00 PM'
                    },
                  
                   ]
               }
              
    
            ],
            droppingPointsPlace:[
                {
                    place:'kovai',
                    points:[
                        {
                            name:'Kovai',
                            address:'Kovai Periyar bus stand',
                            time:'02:45 AM'
                        },
        
                        {
                            name:'Gandi silai',
                            address:'railway station Opposite',
                            time:'03:00 AM'
                        },
                      
                       ]
                   },
            ],
            seats:createSeats(20)
    
           },
           {
            busName:"Murugan Air Bus",
            busNumber:'TN7836',
            busType:'Non-AC Sleeper',
            date:'3-10-2024',
            outDate:'4-10-2024',
            routeName:'madurai - velur',
            departureTime:'11:30 PM',
            arrivalTime:'06:00 AM',
            totalSeats:20,
            availableSeats:20,
            fare:900,
            bordingPointsAndPlace:
            [
               {
                place:'madurai',
                points:[
                    {
                        name:'pookkatai',
                        address:'pookatai Opposite',
                        time:'12:00 AM'
                    },
    
                    {
                        name:'Ganesh Theatre',
                        address:'Ganesh Theatre Opposite',
                        time:'12:30 AM'
                    },
                  
                   ]
               }
              
    
            ],
            droppingPointsPlace:[
                {
                    place:'velur',
                    points:[
                        {
                            name:'vellur jail',
                            address:'velur jsil opposite',
                            time:'04:45 AM'
                        },
        
                        {
                            name:'Gandi silai',
                            address:'railway station Opposite',
                            time:'06:00 AM'
                        },
                      
                       ]
                   },
            ],
            seats:createSeats(20)
    
           },
           {
            busName:"Raj Travels",
            busNumber:'TN1953',
            busType:'AC Sleeper',
            date:'3-10-2024',
            outDate:'3-10-2024',
            routeName:'madurai - selam',
            departureTime:'9:00 AM',
            arrivalTime:'12:00 PM',
            totalSeats:20,
            availableSeats:20,
            fare:500,
            bordingPointsAndPlace:
            [
               {
                place:'madurai',
                points:[
                    {
                        name:'mattuthavani ',
                        address:'mattuthavani omni bus stop',
                        time:'8:45 AM'
                    },
    
                    {
                        name:'Kalavasal',
                        address:'Ganesh Theatre Opposite',
                        time:'9:00 AM'
                    },
                  
                   ]
               }
              
    
            ],
            droppingPointsPlace:[
                {
                    place:'selam',
                    points:[
                        {
                            name:'main Bus Stand',
                            address:'main Bus Stand Velumani Hotel opposite',
                            time:'02:45 PM'
                        },
        
                        {
                            name:'Valluvar Kottom ',
                            address:'railway station Opposite',
                            time:'03:00 PM'
                        },
                      
                       ]
                   },
            ],
            seats:createSeats(20)
    
           }

      ];
  


    
};

AddBusDetails();