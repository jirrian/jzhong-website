var express = require('express');
var router = express.Router();

//home page
router.get('/', function(req, res, next) {
  res.render('portfolio');
});

//contact page
router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Contact'});
});

router.get('/press', function(req, res, next) {
  res.render('press', { title: 'Press' });
});

router.get('/miscmedia', function(req, res, next) {
  res.render('miscmedia', { title: 'Miscellaneous Digital Media' });
});

router.get('/photography', function(req, res, next) {
	res.render('photos', { title: 'Photography'});
});


module.exports = router;
