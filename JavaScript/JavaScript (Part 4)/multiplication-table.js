let n = prompt("Enter a number to create the multiplication table: ");
n = parseInt(n);

for (let i = n; i <= n * 10; i += n) {
    console.log(i);
}
