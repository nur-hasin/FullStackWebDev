const express = require('express');
const app = express();

// app.use((req, res, next) => {
// let { query } = req.query;
// console.log('Query:', query);
// console.log('Middleware executed');
// res.send('middleware response finished');
//     next();
// });

// app.use((req, res, next) => {
//     console.log('Second Middleware executed');
//     return next();
// });

// app.use((req, res, next) => {
//     console.log(req);
//     next();
// });

// logger
// app.use((req, res, next) => {
//     req.time = new Date(Date.now()).toString();
//     console.log(req.method, req.hostname, req.path, req.time);
//     next();
// });

// find latency
// app.use((req, res, next) => {
//     req.requestTime = new Date();

//     res.on('finish', () => {
//         req.responseTime = new Date();
//         const latency = req.responseTime - req.requestTime;
//         console.log('Latancy', latency, 'ms');
//     });

//     next();
// });

app.use('/random', (req, res, next) => {
    console.log('random middleware executed');
    next();
});

const checkToken = (req, res, next) => {
    let { token } = req.query;
    if (token === 'giveaccess') {
        next();
    } else {
        res.send('access denied');
    }
};

app.get('/', (req, res) => {
    res.send('root route handler executed');
});

app.get('/api', checkToken, (req, res) => {
    res.send('data');
});

app.get('/random', (req, res) => {
    res.send('random route handler executed');
});

//404 status
app.use((req, res) => {
    res.status(404).send('Page not found');
});

app.listen(8080, () => {
    console.log('Server is running on port 8080');
});
