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

router.get('/beOurGuest/en', function(req, res, next) {
  res.render('guests', { title: 'Be Our Guest', lang: 'en' });
});

router.get('/beOurGuest/cn', function(req, res, next) {
  res.render('guests', { title: '敬请惠临', lang: 'cn' });
});

router.get('/intro/en', function(req, res, next) {
  res.render('intro', { title: 'Yes. We\'re married.', lang: 'en' });
});

router.get('/intro/cn', function(req, res, next) {
  res.render('intro', { title: '我们结婚啦！', lang: 'cn' });
});

router.get('/prepare/en', function(req, res, next) {
  res.render('prepare', { title: 'Be prepared.', lang: 'en' });
});

router.get('/prepare/cn', function(req, res, next) {
  res.render('prepare', { title: '如何准备', lang: 'cn' });
});

router.get('/arrive/en', function(req, res, next) {
  res.render('arrive', { title: 'Arrive on time.', lang: 'en' });
});

router.get('/arrive/cn', function(req, res, next) {
  res.render('arrive', { title: '准时到达', lang: 'cn' });
});

module.exports = router;
