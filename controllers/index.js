var express = require('express'),
  router = express.Router(),
  feed = require('../rss/feed.js');
  
try {
    var config = require('../local/config.js');
} catch (err) {
    console.log(err);
    var config = {};
}

//user controllers

// index view
router.get('/', function(req, res) {
    res.render('index');
});


router.get('/subscribe/:email', function(req, res) {
    res.send(req.params.email);
});

// 404 for any page that doesnt exist - This goes after all other views
router.get('*', function(req, res){
  res.status(404).send("This page doesn't exist... yet");
});

module.exports = router;