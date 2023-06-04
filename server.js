const express = require('express');
const connectDB = require("./db/connect")
const app = express();



app.use(express.json({ extended: false }));



const PORT = 8090



const start = async () => {
    try {
        await connectDB();
        console.log('DB connected successfully...')
        app.listen(PORT, () => console.log(`server running on ${PORT}`));

    } catch (error) {
        console.log("error has occured", error.message);
    }
}


start();