function hourGlass(arr) {
let a = 3;
let b = 3;
let result = -64

    for(let i = 0; i <= a; i++) {
      for (let j = 0; j <= b; j++) {
        // sum for the top of hourglass
        let sum = arr[i][j] + arr[i][j + 1] + arr[i][j + 2];

        // add the middle of hourglass
        sum += arr[i + 1][j + 1];

        // add the bottom of hourglass
        sum += arr[i + 2][j] + arr[i + 2][j + 1] + arr[i + 2][j + 2];

        if (result < sum)
            result = sum;
      }
    }
    return result;
}
console.log(hourGlass([
[1, 1, 1, 0, 0, 0],
[0, 1, 0, 0, 0, 0],
[1, 1, 1, 0, 0, 0],
[0, 0, 2, 4, 4, 0],
[0, 0, 0, 2, 0, 0],
[0, 0, 1, 2, 4, 0]
]));
