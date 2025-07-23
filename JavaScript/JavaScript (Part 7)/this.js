const student = {
    name: "Bob",
    age: 23,
    eng: 90,
    math: 97,
    phy: 95,
    getAvg() {
        console.log(this);
        let avg = (this.eng + this.math + this.phy) / 3;
        console.log(`${this.name} got an average marks = ${avg}`);
    }
}

student.getAvg();

function getAvg() {
    console.log(this);
}

getAvg();
