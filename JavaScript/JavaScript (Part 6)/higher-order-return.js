function oddOrEvenFactory(request) {
    if (request === "odd") {
        return function (n) {
            console.log(n % 2 != 0);
        }
    } else if (request === "even") {
        return function (n) {
            console.log(n % 2 == 0);
        }
    } else {
        return function () {
            console.log("Wrong request");
        }
    }
}

const oddCheck = oddOrEvenFactory("odd");
oddCheck(5);
oddCheck(4);

const evenCheck = oddOrEvenFactory("even");
evenCheck(5);
evenCheck(4);

const invalidCheck = oddOrEvenFactory("invalid");
invalidCheck();
