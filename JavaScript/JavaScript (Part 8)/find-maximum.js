let arr1 = [1, 4, 2, 5, 6, 7, 2, 9, 2];

let max1 = arr1[0];

for (let i = 0; i < arr1.length; i++) {
    if (max1 < arr1[i]) {
        max1 = arr1[i];
    }
}

console.log(max1);


let arr2 = [1, 4, 24, 69, 71, 2, 9, 52];

let max2 = arr2.reduce((max2, el) => {
    if (max2 < el) {
        return el;
    } else {
        return max2;
    }
});

console.log(max2);
