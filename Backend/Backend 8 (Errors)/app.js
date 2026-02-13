const express = require('express');
const app = express();

const checkToken = (req, res, next) => {
    let { token } = req.query;
    if (token === 'giveaccess') {
        next();
    } else {
        throw new Error('access denied');
    }
};

app.get('/err', (req, res) => {
    abcd = abcd;
});

app.use((err, req, res, next) => {
    console.log("-------Error1-------");
    next(err);
});

app.use((err, req, res, next) => {
    console.log("-------Error2-------");
    next(err);
});

app.get('/', (req, res) => {
    res.send('root route handler executed');
});

app.get('/api', checkToken, (req, res) => {
    res.send('data');
});

// 404 status
// app.use((req, res) => {
//     res.status(404).send('Page not found');
// });

app.listen(8080, () => {
    console.log('Server is running on port 8080');
});
