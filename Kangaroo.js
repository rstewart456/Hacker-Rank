function kangaroo(arr) {
    let x1 = arr[0],
        x2 = arr[2],
        v1 = arr[1],
        v2 = arr[3];
    // if (x1 % 2 == 0 && x2 % 2 == 1 && v1 % 2 == 0 && v2 % 2 == 0 || x1 % 2 == 1 && x2 % 2 == 0 && v1 % 2 == 0 && v2 % 2 == 0) {
    //     return "NO"
    // } else {
    //     if (x1 < x2 && v1 > v2 || x1 > x2 && v1 < v2) {
    //         return "YES"
    //     } else {
    //         return "NO"
    //     }
    // }
//}
return (v1 > v2 && (x2 - x1) % (v1 - v2) == 0) ? "YES" : "NO";
}
console.log(kangaroo([21, 6, 47, 3]));