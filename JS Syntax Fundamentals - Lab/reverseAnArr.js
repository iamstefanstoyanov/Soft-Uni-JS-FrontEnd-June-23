function reverse(x, arr) {
  arr.splice(x, arr.length - 1);
  arr.reverse();
  let newArr='';
    for(let el of arr) {
        newArr += ` ${el}`;
    }
    console.log(newArr);
}
reverse(3, [10, 20, 30, 40, 50]);
reverse(4, [-1, 20, 99, 5]);
reverse(2, [66, 43, 75, 89, 47]);
