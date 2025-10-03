const figlet = require("C:/Users/nurha/.npm-global/node_modules/figlet");

figlet("Hey", function (err, data) {
    if (err) {
        console.log("Something went wrong...");
        console.dir(err);
        return;
    }
    console.log(data);
});
