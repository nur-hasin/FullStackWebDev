let nums1 = [10, 20, 30, 440, 100];

let ans = nums1.every((el) => el % 10 == 0);

console.log(ans);



let nums2 = [1, 4, 24, 69, 71, 2, 9, 52];

let min = nums2.reduce((min, el) => {
    if (min > el) {
        return el;
    } else {
        return min;
    }
});

console.log(min);


function getMin(nums2) {
    let min = nums2.reduce((min, el) => {
        if (min > el) {
            return el;
        } else {
            return min;
        }
    });
    
    return min;
}

console.log(getMin([24, 69, 71, 2, 9]));
