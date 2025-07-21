const classInfo = [
    {
        name: "aman",
        grade: 'A',
        city: "dhaka"
    },
    {
        name: "jaman",
        grade: 'A+',
        city: "Rajshahi"
    },
    {
        name: "karan",
        grade: 'B+',
        city: "Sylhet"
    }
];

console.log(classInfo);
console.log(classInfo[0]);
console.log(classInfo[2]);
console.log(classInfo[1].name);
classInfo[1].city = "Chapai Nawabganj";
console.log(classInfo[1]);
classInfo[1].gender = "male";
console.log(classInfo[1]);
delete classInfo[1].gender;
console.log(classInfo[1]);
