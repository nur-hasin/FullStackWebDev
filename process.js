console.log(process);
console.log(process.version);
console.log(process.release);
console.log(process.cwd());

console.log(process.argv);

let args = process.argv;

for (let i = 2; i < args.length; i++) {
    console.log("hello to", args[i]);
}