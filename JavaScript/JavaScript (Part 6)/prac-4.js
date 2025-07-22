function printMultiTable(n) {
    for (let i = n; i <= n * 10; i += n) {
        console.log(`${n} x ${i / n} = ${i}`);
    }
}

printMultiTable(5);
printMultiTable(20);