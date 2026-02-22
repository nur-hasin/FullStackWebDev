const express = require('express');
const app = express();
const port = 8080;
const mongoose = require('mongoose');
const MONGO_URL = 'mongodb://127.0.0.1:27017/stayly';
const Listing = require('./models/listing.js');
const path = require('path');
const methodOverride = require('method-override');
const ejsMate = require('ejs-mate');
const wrapAsync = require('./utils/wrapAsync.js');
const ExpressError = require('./utils/ExpressError.js');
const { listingSchema } = require('./schema.js');
const Review = require('./models/review.js');
const { reviewSchema } = require('./schema.js');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));
app.engine('ejs', ejsMate);
app.use(express.static(path.join(__dirname, 'public')));

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

main()
    .then(() => console.log('Connected to DB'))
    .catch(err => console.log(err));

async function main() {
    await mongoose.connect(MONGO_URL);
};

// listing validation
const validateListing = (req, res, next) => {
    let { error } = listingSchema.validate(req.body);
    if (error) {
        let errMsg = error.details.map((el) => el.message).join(', ');
        return next(new ExpressError(400, errMsg));
    } else {
        next();
    }
};

// review validation
const validateReview = (req, res, next) => {
    let { error } = reviewSchema.validate(req.body);
    if (error) {
        let errMsg = error.details.map((el) => el.message).join(', ');
        return next(new ExpressError(400, errMsg));
    } else {
        next();
    }
};

// root route
app.get('/', (req, res) => {
    res.send('Welcome to the root!');
});

//index route
app.get('/listings', wrapAsync(async (req, res) => {
    const allListings = await Listing.find({});
    res.render('listings/index.ejs', { allListings });
}));

// new route
app.get('/listings/new', (req, res) => {
    res.render('listings/new.ejs');
});

// show route
app.get('/listings/:id', wrapAsync(async (req, res) => {
    let { id } = req.params;
    const listing = await Listing.findById(id).populate('reviews');
    res.render('listings/show.ejs', { listing });
}));

// create route
app.post('/listings', validateListing, wrapAsync(async (req, res, next) => {
    const newListing = new Listing(req.body.listing);
    await newListing.save();
    res.redirect('/listings');
}));

//edit route
app.get('/listings/:id/edit', wrapAsync(async (req, res) => {
    let { id } = req.params;
    const listing = await Listing.findById(id);
    res.render('listings/edit.ejs', { listing });
}));

// update route
app.put('/listings/:id', validateListing, wrapAsync(async (req, res) => {
    let { id } = req.params;
    await Listing.findByIdAndUpdate(
        id,
        { ...req.body.listing },
        { runvalidators: true }
    );
    res.redirect(`/listings/${id}`);
}));

// delete route
app.delete('/listings/:id', wrapAsync(async (req, res) => {
    let { id } = req.params;
    await Listing.findByIdAndDelete(id);
    res.redirect('/listings');
}));

// review post route
app.post('/listings/:id/reviews', validateReview, wrapAsync(async (req, res) => {
    let listing = await Listing.findById(req.params.id);
    let newReview = new Review(req.body.review);

    listing.reviews.push(newReview);

    await newReview.save();
    await listing.save();

    res.redirect(`/listings/${listing._id}`);
}));

// review delete route
app.delete('/listings/:id/reviews/:reviewId', wrapAsync(async (req, res) => {
    let { id, reviewId } = req.params;

    await Listing.findByIdAndUpdate(id, { $pull: { reviews: reviewId } });
    await Review.findByIdAndDelete(reviewId);

    res.redirect(`/listings/${id}`);
}));

// 404 handler
app.use((req, res, next) => {
    next(new ExpressError(404, "Page Not Found!"));
});

// error handler
app.use((err, req, res, next) => {
    let { statusCode = 500, message = 'someting went wrong!' } = err;
    res.status(statusCode).render('error.ejs', { message });
});