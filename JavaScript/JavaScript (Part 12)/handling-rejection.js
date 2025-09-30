function getNum2() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let num = Math.floor(Math.random() * 10) + 1;

            if (num > 7) {
                reject("promise rejected");
            }

            resolve(`Random num is: ${num}, promise resolved`);
        }, 1000);
    });
}

async function randNum2() {
    try {
        console.log(await getNum2());
        console.log(await getNum2());
        console.log(await getNum2());
    } catch (err) {
        console.log(err);
        console.log("error handled, continuing execution");
    }

    let a = 7;
    console.log(a);
    console.log("new num = ", a + 3);
}

randNum2();