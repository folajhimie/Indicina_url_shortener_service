const express = require('express');
const connectDB = require("./db/connect")
const ShortUrl = require('./models/shortUrl')
const app = express();


app.set('view engine', 'ejs')
app.use(express.urlencoded({ extended: false }))

app.get('/', async (req, res) => {
    const shortUrls = await ShortUrl.find()
    res.render('index', { shortUrls: shortUrls })
})

app.use('/', require('./routes/urls'))

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