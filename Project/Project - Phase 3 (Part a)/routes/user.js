const express = require('express');
const wrapAsync = require('../utils/wrapAsync');
const router = express.Router();
const passport = require('passport');
const { saveRedirectUrl } = require('../middleware.js');
const userController = require('../controllers/users.js');

router.get('/signup', userController.renderSignupForm);

router.post('/signup', wrapAsync(userController.signup));

router.get('/signin', userController.renderSigninForm);

router.post('/signin', saveRedirectUrl, passport.authenticate('local', { failureRedirect: '/signin', failureFlash: true }), userController.signin);

router.get('/signout', userController.signout);

module.exports = router;