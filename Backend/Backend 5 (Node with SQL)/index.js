const { faker } = require('@faker-js/faker');
const mysql = require('mysql2');
const express = require('express');
const app = express();
const path = require('path');
const methodOverride = require('method-override');

app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '5mY/{nha}/sqL5',
    database: 'delta_app',
});

// Inserting new data for single user
// let q = "INSERT INTO `user` (id, username, email, password) VALUES (?, ?, ?, ?)";
// let user = ["123", "123_newuser", "abc@gmail.com", "abc"];

// try {
//     connection.query(q, user, (err, result) => {
//         if (err) throw err;
//         console.log(result);
//     });
// } catch(err) {
//     console.log(err);
// }

// connection.end();


// Inserting new data for multiple user
// let q = "INSERT INTO `user` (id, username, email, password) VALUES ?";
// let users = [
//     ["123b", "123_newuserb", "abc@gmail.comb", "abcb"],
//     ["123c", "123_newuserc", "abc@gmail.comc", "abcc"]
// ];

// try {
//     connection.query(q, [users], (err, result) => {
//         if (err) throw err;
//         console.log(result);
//     });
// } catch(err) {
//     console.log(err);
// }

// connection.end();

let getRandomUser = () => {
    return [
        faker.string.uuid(),
        faker.internet.username(),
        faker.internet.email(),
        faker.internet.password(),
    ];
};

// Inserting new data for multiple random users
// let q = "INSERT INTO `user` (id, username, email, password) VALUES ?";

// let data = [];
// for (let i = 1; i <= 100; i++) {
//     data.push(getRandomUser());
// }

// try {
//     connection.query(q, [data], (err, result) => {
//         if (err) throw err;
//         console.log(result);
//     });
// } catch(err) {
//     console.log(err);
// }

// connection.end();

// home route
app.get('/', (req, res) => {
    let q = `SELECT count(*) FROM user`;

    try {
        connection.query(q, (err, result) => {
            if (err) throw err;
            let count = result[0]['count(*)'];
            res.render('home.ejs', { count });
        });
    } catch (err) {
        res.send('some error in DB');
    }
});

// index route
app.get('/user', (req, res) => {
    let q = `SELECT * FROM user`;

    try {
        connection.query(q, (err, result) => {
            if (err) throw err;
            let data = result;
            res.render('users.ejs', { data });
        });
    } catch (err) {
        res.send('some error in DB');
    }
});

// edit route
app.get('/user/:id/edit', (req, res) => {
    let { id } = req.params;
    let q = `SELECT * FROM user WHERE id='${id}'`;

    try {
        connection.query(q, (err, result) => {
            if (err) throw err;
            let user = result[0];
            res.render('edit.ejs', { user });
        });
    } catch (err) {
        res.send('some error in DB');
    }
});

// update route
app.patch('/user/:id', (req, res) => {
    let { id } = req.params;
    let { username: newUsername, password: formPass } = req.body;
    let q = `SELECT * FROM user WHERE id='${id}'`;

    try {
        connection.query(q, (err, result) => {
            if (err) throw err;
            let user = result[0];

            if (formPass != user.password) {
                res.send('wrong password entered!');
            } else {
                let q2 = `UPDATE user SET username='${newUsername}' where id='${id}'`;

                connection.query(q2, (err, result) => {
                    if (err) throw err;
                    res.redirect('/user');
                });
            }
        });
    } catch (err) {
        console.log(err);
        res.send('some error in DB');
    }
});

// new route
app.get('/user/new', (req, res) => {
    res.render('new.ejs');
});

// create route
app.post('/user', (req, res) => {
    let { username, email, password } = req.body;
    let id = faker.string.uuid();
    let q = `INSERT INTO user (id, username, email, password) VALUES (?, ?, ?, ?)`;

    try {
        connection.query(q, [id, username, email, password], (err, result) => {
            if (err) throw err;
            res.redirect('/user');
        });
    } catch (err) {
        res.send('some error in DB');
    }
});

// delete confirmation route
app.get('/user/:id/delete', (req, res) => {
    let { id } = req.params;
    let q = `SELECT * FROM user WHERE id='${id}'`;

    try {
        connection.query(q, (err, result) => {
            if (err) throw err;
            let user = result[0];
            res.render('delete.ejs', { user });
        });
    } catch (err) {
        res.send('some error in DB');
    }
});

// delete route
app.delete('/user/:id', (req, res) => {
    let { id } = req.params;
    let { password: formPass } = req.body;
    let q = `SELECT * FROM user WHERE id='${id}'`;

    try {
        connection.query(q, (err, result) => {
            if (err) throw err;
            let user = result[0];

            if (formPass != user.password) {
                res.send('wrong password entered!');
            } else {
                let q2 = `DELETE FROM user WHERE id='${id}'`;

                connection.query(q2, (err, result) => {
                    if (err) throw err;
                    res.redirect('/user');
                });
            }
        });
    } catch (err) {
        console.log(err);
        res.send('some error in DB');
    }
});

app.listen('8080', () => {
    console.log('server is listening to port 8080');
});
