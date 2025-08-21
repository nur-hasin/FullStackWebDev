let names = ["tony", "bruce", "steve", "lee", "yoko", "rock"];

let [winner, runnerup, secondRunnerup, ...others] = names;

console.log(winner);
console.log(runnerup);
console.log(secondRunnerup);
console.log(others);


const student = {
    name: "juko",
    age: 15,
    class: 9,
    subjects: ["math", "science", "english"],
    username: "juko123",
    password: "abcd",
};

let { username: user, password, city: place = "Dhaka" } = student;

console.log(user);
console.log(password);
console.log(place);

