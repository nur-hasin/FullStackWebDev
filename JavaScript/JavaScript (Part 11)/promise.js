function saveToDb(data) {
    return new Promise((resolve, reject) => {
        let internetSpeed = Math.floor(Math.random() * 10 + 1);

        if (internetSpeed > 4) {
            resolve("success: your data was saved");
        } else {
            reject("failure: weak connection. data was not saved");
        }
    });
}

console.log(saveToDb("Hello world"));

