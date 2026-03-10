const express = require('express');
const app = express();
const users = require('./routes/users.js');
const posts = require('./routes/posts.js');
const cookieParser = require('cookie-parser');

app.use(cookieParser('secretcode'));

app.get('/getSignedCookie', (req, res) => {
    res.cookie('madeIn', 'Bangladesh', { signed: true });
    res.send('signed cookie sent');
});

app.get('/verify', (req, res) => {
    console.log(req.signedCookies);
    res.send('verified');
});

app.get('/greet', (req, res) => {
    let { name = 'anonymous' } = req.cookies;
    res.send(`Hi, ${name}`);
});

app.get('/getCookies', (req, res) => {
    res.cookie('greet', 'hello');
    res.cookie('madeIn', 'Bangladesh');
    res.send('sent you some cookies!');
});

app.use('/users', users);
app.use('/posts', posts);

app.get('/', (req, res) => {
    res.send('Hi, I am root!');
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});