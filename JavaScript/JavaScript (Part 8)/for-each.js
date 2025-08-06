let arr1 = [1, 2, 3, 4, 5];

let print = function (el) {
    console.log(el);
}

arr1.forEach(print);


let arr2 = [6, 7, 8, 9, 10];

arr2.forEach(function (el) {
    console.log(el);
});


let arr3 = [11, 12, 13, 14, 15];

arr3.forEach((el) => {
    console.log(el);
});


let arr4 = [{
    name: "juko",
    marks: 98
}, {
    name: "lula",
    marks: 94.6
}, {
    name: "kira",
    marks: 91
}];

arr4.forEach((student) => {
    console.log(student.name);
});
