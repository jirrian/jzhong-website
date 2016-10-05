var express = require('express');
var router = express.Router();

//home page
router.get('/', function(req, res, next) {
  res.render('about', { title: 'About'});
});

//contact page
router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Contact'});
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
