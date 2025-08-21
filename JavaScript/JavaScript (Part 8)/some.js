let nums1 = [1, 3, 7, 11, 15];

let ans1 = nums1.some((el) => {
    return el % 2 == 0;
});

console.log(ans1);


let nums2 = [1, 3, 7, 11, 15, 2];

let ans2 = nums2.some((el) => {
    return el % 2 == 0;
});

console.log(ans2);