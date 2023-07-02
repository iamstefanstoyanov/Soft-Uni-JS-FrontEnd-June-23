function palindromeInt(arr) {
    for(let num of arr){
        let currentNum = num;
        let reversedNum = Number(String(num).split('').reverse().join(''));
        currentNum === reversedNum ? console.log(true) : console.log(false);
    }
}
palindromeInt([123, 323, 421, 121]);
console.log("<-------------------------->")
palindromeInt([32,2,232,1010]);
