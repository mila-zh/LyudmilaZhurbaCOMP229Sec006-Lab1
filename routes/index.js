var express = require('express');
var router = express.Router();

let indexController = require('../configs/controllers/indexcontroller');

/*Lyudmila Zhurba */
/*301250531 */
/*June 1, 2022 */

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home' });
});
router.get('/home', function(req, res, next) {
  res.render('index', { title: 'Home' });
});

router.get('/about', function(req, res, next) {
  res.render('about', { title: 'About' });
});

router.get('/projects', function(req, res, next) {
  res.render('projects', { title: 'Projects' });
});

router.get('/services', function(req, res, next) {
  res.render('services', { title: 'Services' });
});

router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Contact' });
});


router.get('/login', indexController.displayLoginPage);

router.post('/login', indexController.processLoginPage);

router.get('/register', indexController.displayRegisterPage);

router.post('/register', indexController.processRegisterPage);

router.get('/logout', indexController.performLogout);


module.exports = router;
