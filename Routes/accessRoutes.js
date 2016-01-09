var express = require('express'),
    router = express.Router(),
    bodyParser = require('body-parser'),
    poop = require('../model/poop'),
    mongoose = require('mongoose');


/*------------------ GET CALLS ------------------*/
// Get home page
router
  .get('/', function(req, res) {
    res.send('<h1>Hello Social poop lovers!!</h1>');
  });

module.exports = router;
