if (process.env.NODE_ENV != 'production') {
    require('dotenv').config({quiet: true});
}

const express = require('express');
const app = express();
const port = 8080;
const mongoose = require('mongoose');
const path = require('path');
const methodOverride = require('method-override');
const ejsMate = require('ejs-mate');
const session = require('express-session');
const MongoStore = require('connect-mongo').default;
const flash = require('connect-flash');
const passport = require('passport');
const LocalStrategy = require('passport-local');

const User = require('./models/user.js');
const listingsRouter = require('./routes/listing.js');
const reviewsRouter = require('./routes/review.js');
const userRouter = require('./routes/user.js');
const ExpressError = require("./utils/ExpressError.js");

// const MONGO_URL = 'mongodb://127.0.0.1:27017/stayly';
const MONGO_URL = process.env.ATLASDB_URL;

// Express config
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.engine('ejs', ejsMate);
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));
app.use(express.static(path.join(__dirname, 'public')));

// Session store
const store = MongoStore.create({
    mongoUrl: MONGO_URL,
    crypto: {
        secret: process.env.SESSION_SECRET
    },
    touchAfter: 24 * 3600,
    ttl: 7 * 24 * 60 * 60
});

store.on('error', (err) => {
    console.error('Error in mongo session store', err);
})

const sessionOptions = {
    store,
    name: 'stayly.sid',
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
        httpOnly: true,
        sameSite: 'lax',
        secure: process.env.NODE_ENV === 'production',
        expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
        maxAge: 7 * 24 * 60 * 60 * 1000
    }
}

// Middleware 
app.use(session(sessionOptions));
app.use(flash());

app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use((req, res, next) => {
    res.locals.success = req.flash('success');
    res.locals.error = req.flash('error');
    res.locals.currentUser = req.user;
    next();
});

// Routes 
app.use('/listings', listingsRouter);
app.use('/listings/:id/reviews', reviewsRouter);
app.use('/', userRouter);

// 404 handler
app.use((req, res, next) => {
    next(new ExpressError(404, "Page Not Found!"));
});

// Eror handler
app.use((err, req, res, next) => {
    let { statusCode = 500, message = 'someting went wrong!' } = err;
    res.status(statusCode).render('error', { message });
});

// Server start
async function main() {
    await mongoose.connect(MONGO_URL);
    console.log('Connected to DB');

    app.listen(port, () => {
        console.log(`Server is running on http://localhost:${port}/listings`);
    });
};

main().catch(err => console.log(err));