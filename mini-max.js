function miniMaxSum(arr) {
    let a = Math.max(...arr);
    let b = Math.min(...arr);
    //console.log(a);
    //console.log(b);
    const min = arr.filter(arr => arr < a);
    const max = arr.filter(arr => arr > b);
    //console.log(min);
    //console.log(max);
    let c = 0;
    let d = 0;
    let e = 0;
    if (a == b) {
        for (let x = 0; x < arr.length - 1; x++) {
            e = arr[x] + e;
        }
        console.log(e,e);
    } else {
        for (let i = 0; i < min.length; i++) {
            c = min[i] + c;
            d = max[i] + d;
        }
        console.log(c,d);
    }
}
console.log(miniMaxSum([1, 1, 1, 1, 1]));