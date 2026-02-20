const mongoose = require('mongoose');
const MONGO_URL = 'mongodb://127.0.0.1:27017/relationDemo';
const { Schema } = mongoose;

main()
    .then(() => console.log('Connection successful'))
    .catch(err => console.log(err));

async function main() {
    await mongoose.connect(MONGO_URL);
};

const userSchema = new Schema({
    username: String,
    email: String
});

const postSchema = new Schema({
    content: String,
    likes: Number,
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    }
});

const User = mongoose.model('User', userSchema);
const Post = mongoose.model('Post', postSchema);

const addData = async () => {
    let user1 = new User({
        username: 'rock',
        email: 'rock@gmail.com'
    });

    let post1 = new Post({
        content: 'Hello guys',
        likes: 77
    });

    post1.user = user1;

    await post1.save();
    await user1.save();
};

// addData();

const addData2 = async () => {
    let user1 = await User.findOne({ username: 'rock' });

    let post2 = new Post({
        content: 'Good bye',
        likes: 26
    });

    post2.user = user1;
    await post2.save();
};

// addData2();

const getData = async () => {
    let result = await Post.findOne({}).populate('user', 'username');
    console.log(result);
};

getData();