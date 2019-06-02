function birthdayCakeCandles(ar) {
    let a = Math.max(...ar);
    let b = 0;
    for (let i = 0; i < ar.length; i++) {
        if (ar[i] == a) {
            b++;
        }
    }
    return (b);
}
console.log(birthdayCakeCandles([1, 1, 2, 3, 4, 4,]));