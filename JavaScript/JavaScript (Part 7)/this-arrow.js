const student = {
    name: "Jhon",
    marks: 95,
    prop: this, //global scope
    getName: function () {
        console.log(this);
        return this.name;
    },
    getMarks: () => {
        console.log(this); //parent's scope
        return this.marks;
    },
    getInfo1: function () {
        setTimeout(() => {
            console.log(this);
        }, 2000);
    },
    getInfo2: function () {
        setTimeout(function () {
            console.log(this);
        }, 2000);
    }
};

console.log(student);
console.log(student.getName());
console.log(student.getMarks());
student.getInfo1();
student.getInfo2();


