var express = require('express');
var passport = require('passport');
var Account = require('../models/account');

var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.locals.path = req.path;

  res.render('index', { title: 'CyklotrenWWW', user : req.user});
});


//Logowanie
//GET
router.get('/logowanie', function(req, res, next) {
  res.render('subsites/logowanie', {
    title: 'Logowanie',
    user : req.user,});
});

//POST
router.post('/logowanie', passport.authenticate('local', {
  successRedirect: '/',
  failureRedirect: '/logowanie',
  failureFlash: "Zły Login",
  successFlash: 'Dobry Login'
}));

//Wylogowanie OUT
  router.get('/logout', function(req, res) {
    req.logout();
    res.redirect('/');
  });


//Rejestracja
router.get('/rejestracja', function(req, res, next) {
  res.render('subsites/rejestracja', { title: 'rejestracja' });
});

router.post('/rejestracja', function(req, res) {
  Account.register(new Account({ username : req.body.username }), req.body.password, function(err, account) {
    if (err) {
      return res.render('subsites/register', { account : account });
    }

    passport.authenticate('local')(req, res, function () {
      res.redirect('/');
    });
  });
});


router.get('/informacje', function(req, res, next) {
  res.render('subsites/informacje', {
    title: 'informacje',
    user : req.user});
});

router.get('/ustawienia', function(req, res, next) {
  res.render('subsites/ustawienia', {
    title: 'ustawienia',
    user : req.user});
});

module.exports = router;
