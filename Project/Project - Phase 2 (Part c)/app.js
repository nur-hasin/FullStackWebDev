const express = require('express');
const app = express();
const port = 8080;
const mongoose = require('mongoose');
const MONGO_URL = 'mongodb://127.0.0.1:27017/stayly';
const path = require('path');
const methodOverride = require('method-override');
const ejsMate = require('ejs-mate');
const listings = require('./routes/listing.js');
const reviews = require('./routes/review.js');
const session = require('express-session');
const flash = require('connect-flash');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));
app.engine('ejs', ejsMate);
app.use(express.static(path.join(__dirname, 'public')));

const sessionOptions = {
    secret: 'mysupersecretcode',
    resave: false,
    saveUninitialized: true,
    cookie: {
        expires: Date.now() + 7 * 24 * 60 * 60 * 1000,
        maxAge: 7 * 24 * 60 * 60 * 1000,
        httpOnly: true
    }
}

app.use(session(sessionOptions));
app.use(flash());

app.use((req, res, next) => {
    res.locals.success = req.flash('success');
    res.locals.error = req.flash('error');
    next();
});

// root route
app.get('/', (req, res) => {
    res.send('Welcome to the root!');
});

app.use('/listings', listings);
app.use('/listings/:id/reviews', reviews);

// 404 handler
app.use((req, res, next) => {
    next(new ExpressError(404, "Page Not Found!"));
});

// error handler
app.use((err, req, res, next) => {
    let { statusCode = 500, message = 'someting went wrong!' } = err;
    res.status(statusCode).render('error', { message });
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

main()
    .then(() => console.log('Connected to DB'))
    .catch(err => console.log(err));

async function main() {
    await mongoose.connect(MONGO_URL);
};