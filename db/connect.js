const mongoose = require("mongoose");



// this is my database credentials 
const mongoAtlasUri = "mongodb+srv://folajimi:dDclgpNQ5Ia6HhSx@cluster0.o7z1otr.mongodb.net/?retryWrites=true&w=majority";

//This is my database configuration
mongoose.set('strictQuery',false);
const connectDB = () => {
    return mongoose.connect(
        mongoAtlasUri, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        }
    ).then(result => {
        console.log("Connected to the MongoDB Database");
    }).catch( err => {
        console.log("Connection to MongoBD Database has failed", err.message )
    });
}


module.exports = connectDB;