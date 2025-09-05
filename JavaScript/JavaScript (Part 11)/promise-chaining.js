function saveToDb(data) {
    return new Promise((resolve, reject) => {
        let internetSpeed = Math.floor(Math.random() * 10 + 1);

        if (internetSpeed > 4) {
            resolve(`${data} saved successfully!`);
        } else {
            reject(`${data} failed to save due to weak connection.`);
        }
    });
}

saveToDb("Hello World")
    .then((msg) => {
        console.log(`success: ${msg}`);
        return saveToDb("Hey Guys");
    }).then((msg) => {
        console.log(`success: ${msg}`);
        return saveToDb("ABXY");
    }).then((msg) => {
        console.log(`success: ${msg}`);
    }).catch((err) => {
        console.log(`failure: ${err}`);
    });
