function plusMinus(arr) {
    let total = item1(arr);
    let sum = item2(total);

    function item1(input1) {
        let pos = 0;
        let neg = 0;
        let zer = 0;
        for (let i = 0; i < input1.length; i++) {
            if (arr[i] < 0) {
                neg++;
            } else if (arr[i] == 0) {
                zer++;
            } else {
                pos++;
            }
        }
        return [pos, neg, zer]
    }

    function item2(input2) {
        let tim = [];
        for (let i = 0; i < input2.length; i++) {
            tim.push(input2[i] / arr.length.toFixed(6));
        }
        return tim;
    }
    console.log(sum[0].toFixed(6));
    console.log(sum[1].toFixed(6));
    console.log(sum[2].toFixed(6));
}
console.log(plusMinus([-4, 3, -9, 0, 4, 1]));