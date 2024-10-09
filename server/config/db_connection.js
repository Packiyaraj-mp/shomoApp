const mongoose=require('mongoose');

function dbConnection(){
 mongoose.connect('mongodb+srv://packiyaraj:Raj357890@shomo.tsgni.mongodb.net/shomo?retryWrites=true&w=majority&appName=shomo')
.then(con=>console.log(`db connected in ${con.connection.host}`))
.catch(err=>console.log(err));

};

module.exports=dbConnection;
