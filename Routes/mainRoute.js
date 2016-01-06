var express = require('express'),
    app = express(),
    router = express.Router(),
    jade = require('ejs');

// A middleware to intercept and perform before every HTTP request
/*router.use(function(req, res, next){
  req.requestTime = Date.now();
  next();
});*/

router
  .get('/', function(req, res) {
    res.render('main', { title: 'This is express ejs test!' })
});

router
  .get('/about/:user', function(req, res){
    res.send({
      "name": req.params.user
    })
});

module.exports = router;
