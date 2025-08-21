let nums1 = [1, 2, 3, 4, 5];

let sqr = nums1.map(nums1 => nums1 * nums1);

let sum = sqr.reduce((acc, el) => acc + el, 0);

let avg = sum / sqr.length;

console.log(sqr);
console.log(sum);
console.log(avg);


let nums2 = [2, 4, 6, 8, -2, -4];

console.log(nums2.map(nums2 => nums2 + 5));


let strs = ["adam", "bob", "catlyn", "donald", "eve"];

console.log(strs.map(strs => strs.toUpperCase()));


function doubleAndReturnArgs(arr, ...args) {
    let doubleArgs = args.map(num => num * 2);

    return [...arr, ...doubleArgs];
}

console.log(doubleAndReturnArgs([1, 2, 3], 4, 5, 7));
console.log(doubleAndReturnArgs([6, 7], 8, 3));


const mergeObjects = (obj1, obj2) => ({ ...obj1, ...obj2 });

console.log(mergeObjects({ a: 1, b: 2 }, { c: 3, d: 4 }));
console.log(mergeObjects({ x: 10 }, { x: 99, y: 20 }));
