const express = require('express');
const wrapAsync = require('../utils/wrapAsync');
const router = express.Router();
const User = require('../models/user.js');
const passport = require('passport');

router.get('/signup', (req, res) => {
    res.render('user/signup');
});

router.post('/signup', wrapAsync(async (req, res) => {
    try {
        let { email, username, password } = req.body.user;

        const newUser = new User({ email, username });
        await User.register(newUser, password);

        req.flash('success', 'Welcome to Stayly!');
        res.redirect('/listings');
    } catch (err) {
        req.flash('error', err.message);
        res.redirect('/signup');
    }
}));

router.get('/signin', (req, res) => {
    res.render('user/signin');
});

router.post('/signin', passport.authenticate('local', { failureRedirect: '/signin', failureFlash: true }),
    async (req, res) => {
        req.flash('success', 'Welcome back to Stayly!');
        res.redirect('/listings');
});

module.exports = router;