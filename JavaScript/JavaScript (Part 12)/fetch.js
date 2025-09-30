let url1 = "https://catfact.ninja/fact";

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

