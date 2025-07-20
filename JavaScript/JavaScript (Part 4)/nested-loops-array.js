let heroes = [["ironman", "spiderman", "thor"], ["superman", "wonder woman", "flash"]];

for (let i = 0; i < heroes.length; i++) {
    console.log(`outer ${i}: ${heroes[i]}`);
    for (let j = 0; j < heroes[i].length; j++) {
        console.log(`inner ${j}: ${heroes[i][j]}`);
    }
}

let student = [["aman", 95], ["jaman", 94.4], ["karan", 98]];

for (let i = 0; i < student.length; i++) {
    console.log(`info of student #${i + 1}`);
    for (let j = 0; j < student[i].length; j++) {
        console.log(student[i][j]);
    }
}