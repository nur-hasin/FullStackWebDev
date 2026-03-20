const express = require('express');
const router = express.Router({ mergeParams: true });
const wrapAsync = require('../utils/wrapAsync.js');
const { validateReview, isLoggedIn, isReviewCreatedBy } = require('../middleware.js');
const reviewController = require('../controllers/reviews.js');

// create review
router.post('/', isLoggedIn, validateReview, wrapAsync(reviewController.createdReview));

// delete review
router.delete('/:reviewId', isLoggedIn, isReviewCreatedBy, wrapAsync(reviewController.destroyReview));

module.exports = router;