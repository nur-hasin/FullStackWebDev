let url1 = "https://catfact.ninja/fact";

// api request using fetch and promises
fetch(url1)
    .then((res) => {
        console.log(res);
        return res.json();
    })
    .then((data1) => {
        console.log("Data-1: ", data1.fact);
        return fetch(url1);
    })
    .then((res) => {
        return res.json();
    })
    .then((data2) => {
        console.log("Data-2: ", data2.fact);
    })
    .catch((err) => {
        console.log("ERROR - ", err);
    });

console.log("Dogyyy!!");


// api request using async-await
async function getFacts1() {
    try {
        let res3 = await fetch(url1);
        let data3 = await res3.json();
        console.log("Data-3: ", data3.fact);

        let res4 = await fetch(url1);
        let data4 = await res4.json();
        console.log("Data-4: ", data4.fact);
    } catch (err) {
        console.log("ERROR - ", err);
    }
};

getFacts1();


let url2 = "https://catfact.ninja/facts/random";

async function getFacts2() {
    try {
        let res5 = await fetch(url2);
        let data5 = await res5.json();
        console.log("Data-5: ", data5.fact);
    } catch (err) {
        console.log("ERROR - ", err);
    }
};

getFacts2();