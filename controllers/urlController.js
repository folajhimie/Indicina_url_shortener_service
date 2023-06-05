const ShortUrl = require("../models/shortUrl");


// @route POST /shortUrls
// @desc This code encodes the Long Url to a short URL
const shortUrls = async (req, res) => {

    await ShortUrl.create({ full: req.body.fullUrl })

    console.log("getting the url..", req.body.fullUrl);

    res.redirect('/')
}


// @route GET /ur/shortUrl
// @desc GET short url
const shortUrl = async (req, res) => {

    const shortUrl = await ShortUrl.findOne({ short: req.params.shortUrl });

    // console.log("small URL...", shortUrl, "params..", req.params);
    if (shortUrl == null) return res.sendStatus(404)
    shortUrl.save()

    res.redirect(shortUrl.full)

}


// @route POST /getUrls
// @desc This code decodes the short Url to a Long URL
const getLongUrl = async (req, res) => {
 
    const urlLink = req.body.fullUrl;

    if (!urlLink) {
        return res.sendStatus(204).json({
            message: "Link empty!!"
        })
    }

    const findUrl = await ShortUrl.findOne({ short: urlLink })

    if (!findUrl) {
        return res.status(404).json({ messsage: "ShortLink Not Found" });
    }
    // res.redirect('/decoded')
    return res.status(200).json({
        message: "This is the decoded Short URL back to its Long URL Link.",
        FullLink: findUrl.full,
        shortLink: findUrl.short
    });
}


module.exports = { shortUrls, shortUrl, getLongUrl }

