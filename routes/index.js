var express = require('express');
var passport = require('passport');
var Account = require('../models/account');

var router = express.Router();




/* GET home page. */
router.get('/', function(req, res, next) {
  res.locals.path = req.path;

  res.render('index', { title: 'CyklotrenWWW', user : req.user});
});


//Logowanie IN
router.get('/logowanie', function(req, res, next) {
  res.render('logowanie', { title: 'Logowanie', user : req.user,  message: req.flash('message') });
});

router.post('/logowanie', passport.authenticate('local', { successRedirect: '/',
  failureRedirect: '/logowanie', failureFlash: "dupa weza"  }))

//Wylogowanie OUT
//  app.get('/logout', function(req, res) {
//    req.logout();
//    res.redirect('/');
//  });


//Rejestracja
router.get('/rejestracja', function(req, res, next) {
  res.render('rejestracja', { title: 'rejestracja' });
});

router.post('/rejestracja', function(req, res) {
  Account.register(new Account({ username : req.body.username }), req.body.password, function(err, account) {
    if (err) {
      return res.render('register', { account : account });
    }

    passport.authenticate('local')(req, res, function () {
      res.redirect('/');
    });
  });
});



router.get('/informacje', function(req, res, next) {
  res.render('informacje', { title: 'informacje' });
});

module.exports = router;
