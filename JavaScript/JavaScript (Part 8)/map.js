let num = [1, 2, 3, 4];

let double = num.map((el) => {
    return el * 2;
});

console.log(double);


let student = [{
    name: "juko",
    marks: 98
}, {
    name: "lula",
    marks: 94.4
}, {
    name: "kira",
    marks: 91
    }];

let gpa = student.map((el) => {
    return el.marks / 10;
});

console.log(gpa);