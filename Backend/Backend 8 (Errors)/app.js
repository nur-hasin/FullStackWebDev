const express = require('express');
const app = express();
const ExpressError = require('./ExpressError');

const checkToken = (req, res, next) => {
    let { token } = req.query;
    if (token === 'giveaccess') {
        next();
    } else {
        throw new ExpressError(401, 'access denied');
    }
};

app.get('/', (req, res) => {
    res.send('root route handler executed');
});

app.get('/api', checkToken, (req, res) => {
    res.send('data');
});

app.get('/err', (req, res) => {
    abcd = abcd;
});

app.get('/admin', (req, res) => {
    throw new ExpressError(403, 'admin access denied');
});

app.use((err, req, res, next) => {
    // console.log("-------Error1-------");
    let { status = 500, message = "some error occured" } = err;
    res.status(status).send(message);
});

// app.use((err, req, res, next) => {
//     console.log("-------Error2-------");
//     next(err);
// });

// 404 status
// app.use((req, res) => {
//     res.status(404).send('Page not found');
// });

app.listen(8080, () => {
    console.log('Server is running on port 8080');
});
