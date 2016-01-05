var express = require('express'),
    app = express();

var router = express.Router();

// A middleware to intercept and perform before every HTTP request
router.use(function(req, res, next){
  console.log('New request made...');
  next();
});

router
  .route('/')
  .get(function(req, res){
    res.json({"name": "Kunal Mazumdar"});
});



app.use('/', router);
app.listen(5555);
console.log('Application is listening....')
