const express = require('express');
const app = express();
const session = require('express-session');

app.use(session({
    secret: 'mysupersecretstring',
    resave: false,
    saveUninitialized: true
}));

app.get('/register', (req, res) => {
    let { name = 'anonymous' } = req.query;
    req.session.name = name;
    res.redirect('/hello');
});

app.get('/hello', (req, res) => {
    res.send(`hello, ${req.session.name}`);
});

app.get('/req-count', (req, res) => {
    if (req.session.count) {
        req.session.count++;
    } else {
        req.session.count = 1;
    }
    res.send(`You sent a reuest ${req.session.count} times`);
});

app.get('/test', (req, res) => {
    res.send('test successful!');
});

app.get('/', (req, res) => {
    res.send('Hi, I am root!');
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});