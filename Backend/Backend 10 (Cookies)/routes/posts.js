const express = require('express');
const router = express.Router();

// index - post
router.get('/', (req, res) => {
    res.send('Get for posts');
});

// show - post/:id
router.get('/:id', (req, res) => {
    res.send('Get for post with id');
});

// post - post
router.post('/', (req, res) => {
    res.send('Post for posts');
});

// delete - post/:id
router.delete('/:id', (req, res) => {
    res.send('Delete for post with id');
});

module.exports = router;