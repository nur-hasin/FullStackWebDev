const Listing = require('../models/listing.js');
const mbxGeocoding = require('@mapbox/mapbox-sdk/services/geocoding');
const mapToken = process.env.MAP_TOKEN;
const geocodingClient = mbxGeocoding({ accessToken: mapToken });

module.exports.index = async (req, res) => {
    const allListings = await Listing.find({});
    res.render('listings/index', { allListings });
};

module.exports.renderNewForm = (req, res) => {
    res.render('listings/new');
};

module.exports.showListing = async (req, res) => {
    let { id } = req.params;
    const listing = await Listing.findById(id).populate({ path: 'reviews', populate: { path: 'createdBy' } }).populate('owner');

    if (!listing) {
        req.flash('error', 'Listing you requested for does not exist!');
        return res.redirect('/listings');
    }

    res.render('listings/show', { listing });
};

module.exports.createListing = async (req, res, next) => {
    let geoResponse = await geocodingClient.forwardGeocode({
        query: req.body.listing.location,
        limit: 1
    }).send();

    if (!geoResponse.body.features.length) {
        req.flash('error', 'Invalid location');
        return res.redirect('/listings/new');
    };

    let url = req.file.path;
    let filename = req.file.filename;

    const newListing = new Listing(req.body.listing);
    newListing.owner = req.user._id;
    newListing.image = { url, filename };
    newListing.geometry = geoResponse.body.features[0].geometry;
    
    await newListing.save();

    req.flash('success', 'New Listing Created!');
    res.redirect('/listings');
};

module.exports.renderEditForm = async (req, res) => {
    let { id } = req.params;
    const listing = await Listing.findById(id);

    if (!listing) {
        req.flash('error', 'Listing you requested for does not exist!');
        return res.redirect('/listings');
    }

    let originalImageUrl = listing.image.url;
    console.log(listing.image.url);
    originalImageUrl = originalImageUrl.replace('/upload', '/upload/h_200,w_300');

    res.render('listings/edit', { listing, originalImageUrl });
};

module.exports.updateListing = async (req, res) => {
    let { id } = req.params;
    let listing = await Listing.findByIdAndUpdate(id, { ...req.body.listing }, { runValidators: true });

    if (req.file) {
        let url = req.file.path;
        let filename = req.file.filename;

        listing.image = { url, filename };
        await listing.save();
    }

    req.flash('success', 'Listing Updated!');
    res.redirect(`/listings/${id}`);
};

module.exports.destroyListing = async (req, res) => {
    let { id } = req.params;
    await Listing.findByIdAndDelete(id);
    req.flash('success', 'Listing Deleted!');
    res.redirect('/listings');
};