// function saveToDb(data) {
//     let internetSpeed = Math.round(Math.random() * 10 + 1);

//     if (internetSpeed > 4) {
//         console.log("your data was saved: ", data);
//     } else {
//         console.log("week connection. data was not saved");
//     }
// }

// saveToDb("Hello world");


// function saveToDb(data, success, failure) {
//     let internetSpeed = Math.floor(Math.random() * 10 + 1);

//     if (internetSpeed > 4) {
//         success();
//     } else {
//         failure();
//     }
// }

// saveToDb("Hello world", () => {
//     console.log("success: your data was saved");
// }, () => {
//     console.log("failure: weak connection. data was not saved");
// });


function saveToDb(data, success, failure) {
    let internetSpeed = Math.floor(Math.random() * 10 + 1);

    if (internetSpeed > 4) {
        success();
    } else {
        failure();
    }
}

saveToDb("Hello world", () => {
    console.log("success: your data was saved");
    saveToDb("Hey Guys", () => {
        console.log("success2: your data2 was saved");
        saveToDb("ABXY", () => {
            console.log("success3: your data3 was saved");
        }, () => {
            console.log("failure3: weak connection. data3 was not saved");
        })
    }, () => {
        console.log("failure2: weak connection. data2 was not saved");
    })
}, () => {
    console.log("failure: weak connection. data was not saved");
});

