var express = require('express');
var router = express.Router();

//home page
router.get('/', function(req, res, next) {
  res.render('portfolio', { title: 'Portfolio'});
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

module.exports = router;
