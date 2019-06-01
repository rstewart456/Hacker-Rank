function staircase(n) {
    var a, b, c;
    for (let i = 0; i < n; i++) {
        a = n - 1 -i; //spaces
        b = i + 1; //hash sign
        c = " ".repeat(a) + '#'.repeat(b);
        console.log(c)
    }
}
staircase(6);