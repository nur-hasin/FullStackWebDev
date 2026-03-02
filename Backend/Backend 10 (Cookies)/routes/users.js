const express = require('express');
const router = express.Router();

// index - users
router.get('/', (req, res) => {
    res.send('Get for users');
});

// show - users/:id
router.get('/:id', (req, res) => {
    res.send('Get for user with id');
});

// post - users
router.post('/', (req, res) => {
    res.send('Post for users');
});

// delete - users/:id
router.delete('/:id', (req, res) => {
    res.send('Delete for user with id');
});

module.exports = router;