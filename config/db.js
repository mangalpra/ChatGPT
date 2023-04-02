const mongoose = require ("mongoose");
const colors = require("colors");
mongoose.set("strictQuery", true);

const connectDB = async () => {
    try{
        await mongoose.connect(process.env.MONGO_URI);
        //console.log("Connected");
        console.log(`Connected to MongoDB Database ${mongoose.connection.host}`.bgGreen.white);
    }catch(error){
        console.log(`MongoDB Database Error ${error}`.bgRed.white);
    }
};

module.exports = connectDB;