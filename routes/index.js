var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Moment of us' });
});

router.get('/robots.txt', function(req, res, next) {
  res.set('Content-Type', 'text/plain');
  res.send('User-agent: *\nDisallow: /');
});

router.get('/beOurGuest', function(req, res, next) {
  res.render('guests', { title: 'Be Our Guest' });
});

router.get('/intro', function(req, res, next) {
  res.render('intro', { title: 'Yes. We\'re married.' });
});

module.exports = router;
