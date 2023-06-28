function sameNumbers(x) {
    let input = String(x);
    let isSame = true;
    let sum = 0;
    let firstD = input[0];
    for (let i = 0; i < input.length; i++) {
        let currentDigit = +input[i];
        sum += currentDigit;
        if (firstD != currentDigit) {
            isSame = false;
        }
    }
    console.log(isSame);
    console.log(sum)
}