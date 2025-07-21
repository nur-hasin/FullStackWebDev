const post = {
    username: "@shradhakhapra",
    content: "This is my #firstPost",
    likes: 150,
    reposts: 5,
    tags: ["@apnacollege", "@sigma"]
};

console.log(post);
console.log(post["content"]);
console.log(post.likes);
console.log(post.tags);
console.log(post.tags[1]);

let prop = "reposts";
console.log(post[prop]);

