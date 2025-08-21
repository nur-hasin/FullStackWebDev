let nums1 = [1, 2, 3, 4, 7, 8, 2, 9, 10, 12, 11];

let ans1 = nums1.filter((el) => {
    return el % 2 == 0;
});

console.log(ans1);


let nums2 = [1, 2, 3, 4, 7, 8, 2, 9, 10, 12, 11];

let ans2 = nums2.filter((el) => {
    return el % 2 != 0;
});

console.log(ans2);


let nums3 = [1, 2, 3, 4, 7, 8, 2, 9, 10, 12, 11];

let ans3 = nums3.filter((el) => {
    return el < 5;
});

console.log(ans3);