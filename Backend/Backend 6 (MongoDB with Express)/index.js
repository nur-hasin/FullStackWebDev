const express = require("express");
const app = express();
const path = require("path");
const mongoose = require("mongoose");
const Chat = require("./models/chat.js");
const methodOverride = require("method-override");

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
    await mongoose.connect("mongodb://127.0.0.1:27017/whatsapp");
};

app.get("/", (req, res) => {
    res.send("working root");
});

// index route
app.get("/chats", async (req, res) => {
    try {
        let chats = await Chat.find();
        res.render("index.ejs", { chats });
    } catch (err) {
        res.send(err.message);
    };
});

// new route
app.get("/chats/new", (req, res) => {
    res.render("new.ejs");
});

// create route
app.post("/chats", async (req, res) => {
    try {
        let { from: newFrom, to: newTo, msg: newMsg } = req.body;
        let newChat = new Chat({
            from: newFrom,
            to: newTo,
            msg: newMsg,
            created_at: new Date()
        });

        await newChat.save();
        res.redirect("/chats");
    } catch (err) {
        res.send(err.message);
    }
});

// edit route
app.get("/chats/:id/edit", async (req, res) => {
    try {
        let { id } = req.params;
        let chat = await Chat.findById(id);
        res.render("edit.ejs", { chat });
    } catch (err) {
        res.send(err.message);
    }
});

// update route
app.put("/chats/:id", async (req, res) => {
    try {
        let { id } = req.params;
        let { msg: newMsg } = req.body;

        await Chat.findByIdAndUpdate(
            id,
            { msg: newMsg, updated_at: new Date() },
            { runValidators: true }
        );
        res.redirect("/chats");
    } catch (err) {
        res.send(err.message);
    }
});

// destroy route
app.delete("/chats/:id", async (req, res) => {
    try {
        let { id } = req.params;
        await Chat.findByIdAndDelete(id);
        res.redirect("/chats");
    } catch (err) {
        res.send(err.message);
    }
});
