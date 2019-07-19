const express = require('express');
const router = express.Router();
const { postRegister, postLogin, getLogout } = require('../controllers/index');
const { asyncErrorHandler } = require('../middleware/index'); 

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index', { title: 'Blog App' });
});

/* GET register page. */
router.get('/register', (req, res, next) => {
  res.send('GET register');
});

/* POST register page. */
router.post('/register', asyncErrorHandler(postRegister));

/* GET login page. */
router.get('/login', (req, res, next) => {
  res.send('GET login');
});

/* POST login page. */
router.post('/login', postLogin);

/* GET logout page. */
router.get('/logout', getLogout);

/* GET profile page. */
router.get('/profile', (req, res, next) => {
  res.send('GET profile');
});

/* PUT profile page. */
router.get('/profile/:user_id', (req, res, next) => {
  res.send('PUT profile');
});

/* GET forget password page. */
router.get('/forget', (req, res, next) => {
  res.send('GET forget password');
});

/* PUT forget password page. */
router.get('/forget/:token', (req, res, next) => {
  res.send('PUT forget password');
});

/* GET reset password page. */
router.get('/reset', (req, res, next) => {
  res.send('GET reset password');
});

/* PUT reset password page. */
router.get('/reset/:token', (req, res, next) => {
  res.send('PUT reset password');
});

module.exports = router;
