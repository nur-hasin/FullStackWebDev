const User = require('../models/user.js');

module.exports.renderSignupForm = (req, res) => {
    res.render('user/signup');
};

module.exports.signup = async (req, res) => {
    try {
        let { email, username, password } = req.body.user;

        const newUser = new User({ email, username });
        const registeredUser = await User.register(newUser, password);

        req.login(registeredUser, (err) => {
            if (err) {
                return next(err);
            }
            req.flash('success', 'Welcome to Stayly!');
            res.redirect('/listings');
        });
    } catch (err) {
        req.flash('error', err.message);
        res.redirect('/signup');
    }
};

module.exports.renderSigninForm = (req, res) => {
    res.render('user/signin');
};

module.exports.signin = async (req, res) => {
    req.flash('success', 'Welcome back to Stayly!');
    let redirectUrl = res.locals.redirectUrl || '/listings';
    res.redirect(redirectUrl);
};

module.exports.signout = (req, res, next) => {
    req.logout((err) => {
        if (err) {
            return next(err);
        }
        req.flash('success', 'You are logged out!')
        res.redirect('/listings');
    });
};