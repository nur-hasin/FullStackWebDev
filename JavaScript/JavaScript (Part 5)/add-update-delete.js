const student = {
    name: "xana",
    age: 24,
    marks: 94.4,
    city: "Dhaka"
};

console.log(student);
console.log(student.city);
student.city = "Rajshahi";
console.log(student.city);
console.log(student);
student.gender = "male";
console.log(student.gender);
console.log(student);
student.marks = "A";
console.log(student.marks);
console.log(student);
student.marks = [99, 89, 77];
console.log(student.marks);
console.log(student);
delete student.marks;
console.log(student);

