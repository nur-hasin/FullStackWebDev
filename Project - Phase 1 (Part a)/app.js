const express = require('express');
const app = express();
const port = 8080;
const mongoose = require('mongoose');
const MONGO_URL = 'mongodb://127.0.0.1:27017/stayly';
const Listing = require('./models/listing.js');
const path = require('path');
const methodOverride = require('method-override');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

main()
    .then(() => console.log('Connected to DB'))
    .catch(err => console.log(err));

async function main() {
    await mongoose.connect(MONGO_URL);
};

app.get('/', (req, res) => {
    res.send('Welcome to the root!');
});

// app.get("/testListing", async (req, res) => {
//     let sampleListing = new Listing({
//         title: "My New Villa",
//         description: "By the beach",
//         price: 1200,
//         location: "Calangute, Goa",
//         country: "India",
//     });

//     await sampleListing.save();
//     console.log("sample was saved");
//     res.send("successful testing");
// });

// index route
app.get('/listings', async (req, res) => {
    try {
        const allListings = await Listing.find({});
        res.render('listings/index.ejs', { allListings });
    } catch (err) {
        res.send(err.message);
    }
});

// new route
app.get('/listings/new', (req, res) => {
    res.render('listings/new.ejs');
});

// show route
app.get('/listings/:id', async (req, res) => {
    try {
        let { id } = req.params;
        const listing = await Listing.findById(id);
        res.render('listings/show.ejs', { listing });
    } catch (err) {
        res.send(err.message);
    }
});

// create route
app.post('/listings', async (req, res) => {
    try {
        const newListing = new Listing(req.body.listing);
        await newListing.save();
        res.redirect('/listings');
    } catch (err) {
        res.send(err.message);
    }
});

// edit route
app.get('/listings/:id/edit', async (req, res) => {
    try {
        let { id } = req.params;
        const listing = await Listing.findById(id);
        res.render('listings/edit.ejs', { listing });
    } catch (err) {
        res.send(err.message);
    }
});

// update route
app.put('/listings/:id', async (req, res) => {
    try {
        let { id } = req.params;
        await Listing.findByIdAndUpdate(
            id,
            { ...req.body.listing },
            { runvalidators: true }
        );
        res.redirect(`/listings/${id}`);
    } catch (err) {
        res.send(err.message);
    }
});

// delete route
app.delete('/listings/:id', async (req, res) => {
    try {
        let { id } = req.params;
        await Listing.findByIdAndDelete(id);
        res.redirect('/listings');
    } catch (err) {
        res.send(err.message);
    }
});
