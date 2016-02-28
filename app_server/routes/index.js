var express = require('express');
var router = express.Router();
var ctrlLocations = require('../controllers/locations.js')
var ctrlOthers = require('../controllers/others.js')
router.get('/',ctrlLocations.homelist);
router.get('/locations',ctrlLocations.locationInfo);
router.get('/locations/review/new',ctrlLocations.addReview);
router.get('/about',ctrlOthers.about);
module.exports = router;
