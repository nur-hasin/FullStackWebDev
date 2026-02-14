const express = require("express");
const app = express();
const path = require("path");
const mongoose = require("mongoose");
const Chat = require("./models/chat");
const methodOverride = require("method-override");
const ExpressError = require('./ExpressError');

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));

app.listen(8080, () => {
    console.log("app is listening on port 8080");
});

main()
    .then(() => {
        console.log("db connection successful");
    })
    .catch((err) => console.log(err));

async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/fakewhatsapp");
};

function asyncWrap(fn) {
    return function (req, res, next) {
        fn(req, res, next).catch((err) => next(err));
    };
};

app.get("/", (req, res, next) => {
    res.send("working root");
});

// index route
app.get("/chats", asyncWrap(async (req, res, next) => {
    let chats = await Chat.find();
    res.render("index.ejs", { chats });
}));

// new route
app.get("/chats/new", (req, res, next) => {
    // throw new ExpressError(404, 'Page not found');
    res.render("new.ejs");
});

// create route
app.post("/chats", asyncWrap(async (req, res, next) => {
    let { from: newFrom, to: newTo, msg: newMsg } = req.body;
    let newChat = new Chat({
        from: newFrom,
        to: newTo,
        msg: newMsg,
        created_at: new Date()
    });

    await newChat.save();
    res.redirect("/chats");
}));

// show route
app.get('/chats/:id/show', asyncWrap(async (req, res, next) => {
    let { id } = req.params;
    let chat = await Chat.findById(id);
    if (!chat) {
        next(new ExpressError(404, 'Chat not found'));
    }
    res.render("show.ejs", { chat });
}));

// edit route
app.get("/chats/:id/edit", asyncWrap(async (req, res, next) => {
    let { id } = req.params;
    let chat = await Chat.findById(id);
    res.render("edit.ejs", { chat });
}));


// update route
app.put("/chats/:id", asyncWrap(async (req, res, next) => {
    let { id } = req.params;
    let { msg: newMsg } = req.body;

    await Chat.findByIdAndUpdate(
        id,
        { msg: newMsg, updated_at: new Date() },
        { runValidators: true }
    );
    res.redirect(`/chats/${id}/show`);
}));

// destroy route
app.delete("/chats/:id", asyncWrap(async (req, res, next) => {
    let { id } = req.params;
    await Chat.findByIdAndDelete(id);
    res.redirect("/chats");
}));

// handle errors
const handleValidationErr = (err) => {
    console.log('This was a validation error. Please follow rules');
    console.log(err.message);
    return err;
}

app.use((err, req, res, next) => {
    console.log(err.name);
    if (err.name === 'ValidationError') {
        handleValidationErr(err);
    }
    next(err);
});

app.use((err, req, res, next) => {
    let { status = 500, message = "Some error occured" } = err;
    res.status(status).send(message);
});
