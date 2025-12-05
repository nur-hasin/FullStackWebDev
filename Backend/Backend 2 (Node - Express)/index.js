const express = require('express');
const app = express();

console.dir(app);

let port = 3000;

app.listen(port, () => {
    console.log(`app is listening on port ${port}`);
});

// handling requests & sending a response
app.use((req, res) => {
    console.log(req);
    console.log('request received');
    // res.send('This is my web server');
    // res.send('<h1>This is a basic response</h1>');
    res.send({
        name: 'apple',
        color: 'red',
    });
});

// routing
app.get("/", (req, res) => {
    res.send("helllo, i am root path");
});

app.get("/apple", (req, res) => {
    res.send("you contacted apple path");
});

app.get("/orange", (req, res) => {
    res.send("you contacted orange path");
});

app.get(/.*/, (req, res) => {
    res.send("this path dose not exist");
});

app.post("/", (req, res) => {
    res.send("you send a post request to root path");
});

// path parameters
app.get("/:username/:id", (req, res) => {
    let { username, id } = req.params;
    let htmlStr = `<h2>Welcome to the page of @${username}!</h2>`
    res.send(htmlStr);
});

// query strings
app.get("/search", (req, res) => {
    let { q } = req.query;
    if (!q) return res.send("<h2>noting searched</h2>");
    res.send(`<h2>search results for query: ${q}</h2>`);
});
