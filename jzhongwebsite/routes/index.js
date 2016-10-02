var express = require('express');
var router = express.Router();

//home page
router.get('/', function(req, res, next) {
  res.render('index', { title: 'About', stuff:'Jillian Zhong is a programmer, artist, and content creator based in New York and Philly.' });
});

//contact page
router.get('/contact', function(req, res, next) {
  res.render('index', { title: 'Contact', stuff:'jillianzhong@nyu.edu' });
});

router.get('/apps', function(req, res, next) {
  res.render('apps', { title: 'Software Art' });
});

router.get('/miscmedia', function(req, res, next) {
  res.render('miscmedia', { title: 'Miscellaneous Digital Media' });
});

router.get('/photography', function(req, res, next) {
  res.render('photos', { title: 'Photography' });
});

module.exports = router;
