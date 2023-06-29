function sort(arr) {
    arr.sort((a, b) => a - b);
    for (let i = 1; i < arr.length; i+=2) {
        let last = arr.pop();
        arr.splice(i, 0, last);
    }
   return arr;
}
sort([1,65, 3, 52, 48, 63, 31, -3, 18, 56])