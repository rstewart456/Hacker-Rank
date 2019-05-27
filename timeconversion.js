function timeConversion(s) {
    let hour = s.slice(0, 2);
    let newhour = Number(hour) + 12;
    let minute = s.slice(3, 5);
    let second = s.slice(6, 8);
    if (s.includes("PM") == true && hour < 12) {
        return newhour + ":" + minute + ":" + second;
    } else if (s.includes("AM") == true && s.includes("12") == true) {
        return "00" + ":" + minute + ":" + second;
    } else {
        return hour + ":" + minute + ":" + second;
    }

}
console.log(timeConversion("12:05:45AM"));