const mongoose = require("mongoose");

const Data_Base_Conn = () =>{
    mongoose.connect(process.env.MONGODB_URI)
    .then(()=>{
        console.log("Database connected Successfully");
    })
    .catch((err)=>{
        console.log(`${err} occured while connecting to the database`);
    })
}

module.exports = Data_Base_Conn;