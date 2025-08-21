let num = [1, 2, 3, 4];

let finalVal = num.reduce((res, el) => {
    console.log(res);
    return res + el;
});

console.log(finalVal);

