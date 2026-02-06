const mongoose = require('mongoose');

main()
    .then(() => {
        console.log('connection successful');
    })
    .catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/test');
}

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    age: Number
});

const User = mongoose.model("User", userSchema);

// insert single
// const user1 = new User({
//     name: "Adam",
//     email: "adam@yohoo.in",
//     age: 48
// });

// const user2 = new User({
//     name: "Eve",
//     email: "eve@yohoo.in",
//     age: 48
// });

// user2.save()
//     .then((res) => {
//         console.log(res);
//     })
//     .catch((err) => console.log(err));


// insert multiple
// User.insertMany([
//     { name: "Jack", email: "jack@yohoo.in", age: 28 },
//     { name: "Lee", email: "lee@yohoo.in", age: 42 },
//     { name: "Bruce", email: "bruce@yohoo.in", age: 30 }
// ]).then((res) => {
//     console.log(res);
// });

// find without condition
// User.
//     find({})
//     .then((res) => {
//         console.log(res);
//     })
//     .catch((err) => {
//         console.log(err)
//     });

// find with condition
// User.
//     find({ age: { $gt: 47 } })
//     .then((res) => {
//         console.log(res);
//     })
//     .catch((err) => {
//         console.log(err)
//     });

// find with condition and access specific document
// User.
//     find({ age: { $gt: 47 } })
//     .then((res) => {
//         console.log(res[2].name);
//     })
//     .catch((err) => {
//         console.log(err)
//     });

// find with condition and access first document
// User.
//     findOne({ age: { $gt: 47 } })
//     .then((res) => {
//         console.log(res);
//     })
//     .catch((err) => {
//         console.log(err)
//     });

// find by specific ID
// User.
//     findById('6985de4fc7cd43f7e3b917db')
//     .then((res) => {
//         console.log(res);
//     })
//     .catch((err) => {
//         console.log(err)
//     });

// update with the condition found first
// User.
//     updateOne({name: "Lee"}, {age: 43})
//     .then((res) => {
//         console.log(res);
//     })
//     .catch((err) => {
//         console.log(err)
//     });

// update with the condition found all
// User.
//     updateMany({ age: {$gte: 48} }, { age: 55 })
//     .then((res) => {
//         console.log(res);
//     })
//     .catch((err) => {
//         console.log(err)
//     });

// Update first matched document and return updated version
// User.
//     findOneAndUpdate({ name: "Adam" }, { age: 35 }, {new: true})
//     .then((res) => {
//         console.log(res);
//     })
//     .catch((err) => {
//         console.log(err)
//     });

// Update by specific ID and return updated version
// User.
//     findByIdAndUpdate('6984d8250913eed0948d90ce', { age: 42 }, { new: true })
//     .then((res) => {
//         console.log(res);
//     })
//     .catch((err) => {
//         console.log(err)
//     });

// delete with condition found first
// User.
//     deleteOne({ name: "Eve" })
//     .then((res) => {
//         console.log(res);
//     })
//     .catch((err) => {
//         console.log(err)
//     });

// delete with condition found all
// User.
//     deleteMany({ age: 55 })
//     .then((res) => {
//         console.log(res);
//     })
//     .catch((err) => {
//         console.log(err)
//     });

// delete first matched document and return deleted version
// User.
//     findOneAndDelete({ age: 28 })
//     .then((res) => {
//         console.log(res);
//     })
//     .catch((err) => {
//         console.log(err)
//     });

// delete by specific ID and return deleted version
User.
    findByIdAndDelete('6984d8250913eed0948d90ce')
    .then((res) => {
        console.log(res);
    })
    .catch((err) => {
        console.log(err)
    });

