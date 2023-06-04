const ShortUrl = require("../models/shortUrl");


// @route POST /shortUrls
// @desc Create short url
const shortUrls = async (req, res) => {

    await ShortUrl.create({ full: req.body.fullUrl })

    res.redirect('/')
}


// @route GET /ur/shortUrl
// @desc GET short url
const shortUrl = async (req, res) => {

    const shortUrl = await ShortUrl.findOne({ short: req.params.shortUrl })
    if (shortUrl == null) return res.sendStatus(404)
    shortUrl.save()
  
    res.redirect(shortUrl.full)

}


module.exports = { shortUrls, shortUrl }

