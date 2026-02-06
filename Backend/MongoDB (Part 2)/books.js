const mongoose = require('mongoose');

main()
    .then(() => {
        console.log('connection successful');
    })
    .catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/amazon');
}

const bookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        maxLength: 50
    },
    author: {
        type: String
    },
    price: {
        type: Number,
        min: [1, 'Price is too low for Amazon selling']
    },
    discount: {
        type: Number,
        default: 0
    },
    category: {
        type: String,
        enum: ['fiction', 'non-fiction']
    },
    genre: [String]
});

const Book = mongoose.model("Book", bookSchema);

let book1 = new Book({
    title: "Higher Mathematics-1st paper (Class XI-XII)",
    author: "Kitab Uddin",
    price: 610
});

let book2 = new Book({
    title: "Physics-1st paper (Class XI-XII)",
    price: 470
});

let book3 = new Book({
    title: "Chemistry-1st paper (Class XI-XII)",
    author: "Prof. Haradhan Nag",
    price: "550"
});

let book4 = new Book({
    title: "Marvel Comics",
    price: "499",
    category: "fiction"
});

let book5 = new Book({
    title: "Marvel Comics v2",
    price: "499",
    category: "fiction",
    genre: ["action", "adventure", "superhero"]
});

// book1.save()
//     .then((res) => {
//         console.log(res);
//     }).catch((err) => {
//         console.log(err);
//     });

// book2.save()
//     .then((res) => {
//         console.log(res);
//     }).catch((err) => {
//         console.log(err);
//     });

// book3.save()
//     .then((res) => {
//         console.log(res);
//     }).catch((err) => {
//         console.log(err);
//     });

// book4.save()
//     .then((res) => {
//         console.log(res);
//     }).catch((err) => {
//         console.log(err);
//     });

// book5.save()
//     .then((res) => {
//         console.log(res);
//     }).catch((err) => {
//         console.log(err);
//     });

// Update by ID with schema validation
Book.
    findByIdAndUpdate('69861499d75485fc95d27926', { price: -100 }, { runValidators: true, new: true })
    .then((res) => {
        console.log(res);
    })
    .catch((err) => {
        console.log(err.errors.price.properties.message);
    });

