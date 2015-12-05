var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.locals.path = req.path;
  res.render('index', { title: 'Express' });
});

router.get('/logowanie', function(req, res, next) {
  res.render('logowanie', { title: 'Logowanie' });
});

router.get('/rejestracja', function(req, res, next) {
  res.render('rejestracja', { title: 'rejestracja' });
});

router.get('/informacje', function(req, res, next) {
  res.render('informacje', { title: 'informacje' });
});

module.exports = router;
