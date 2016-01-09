var express = require('express'),
    router = express.Router(),
    bodyParser = require('body-parser'),
    poop = require('../model/poop'),
    mongoose = require('mongoose');

/*------------------ GET CALLS ------------------*/
// Get all poops and get by name
router
  .get('/poops', function(req, res) {
    if(req.query.name){
      poop.findOne({name: req.query.name}, function(err, poops){
        if(err){
          res.send(err)
        }
        res.json(poops);
      });
    } else {
      poop.find(function(err, poops){
        if(err){
          res.send(err)
        }
        res.json(poops);
      });
    }
  });

// Get poop details by poop id
router
  .get('/poops/:id', function(req, res) {
    poop.findOne({_id: req.params.id}, function(err, poops){
      if(err){
        res.send(err)
      }
      console.log('Poops: ', poops)
      res.json(poops);
    });
  });

router
  .post('/poops', function(req, res) {
    var poop1 = new poop();
    poop1.name = req.body.name;
    poop1.source = req.body.source;
    poop1.imgUrl = req.body.imgUrl;
    poop1.date = req.body.date;
    poop1.description = req.body.description;

    poop1.save(function(err){
      if(!err){
        console.log('Record entered!');
        poop.findOne().sort({date: -1}).exec(function(err, poops){
          res.json({response: 'OK', error: 'NA', id: poops._id})
        });
        //res.json({response: 'OK', error: 'NA', id: ''})
      } else{
        console.log('Error while record insertion!')
        res.json({response: 'FAIL', error: err})
      }
    });
    console.log(req.body);
  });

// Get poop details by poop id
router
  .delete('/poops/:id', function(req, res) {
    var poopsToDel = req.params.id.split(',').length;
    for(var i=0; i<poopsToDel; i++){
      poop.remove({_id: req.params.id.split(',')[i]}, function(err){
        if(err){
          res.json({error: err, recordId: req.params.id.split(',')[i]});
        }
      });
      res.json({response: 'OK', delCount: poopsToDel});
    }
  });


module.exports = router;
