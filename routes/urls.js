const express = require("express");
const router = express.Router();

const urlController = require('../controllers/urlController')


router.route('/shortUrls').post(urlController.shortUrls);

router.route('/:shortUrl').get(urlController.shortUrl);

router.route('/longUrls').post(urlController.getLongUrl);


module.exports = router 