const classInfo = {
    aman: {
        grade: 'A',
        city: "dhaka"
    },
    jaman: {
        grade: 'A+',
        city: "Rajshahi"
    },
    karan: {
        grade: 'B+',
        city: "Sylhet"
    }
};

console.log(classInfo);
console.log(classInfo.jaman);
console.log(classInfo.karan.city);
classInfo.karan.city = "Khulna";
console.log(classInfo.karan.city);
console.log(classInfo.karan);