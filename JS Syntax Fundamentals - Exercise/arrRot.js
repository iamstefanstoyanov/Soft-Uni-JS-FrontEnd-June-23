function arrRot(arr,n){
    for(let i = 0; i<n;i++){
        let el = arr.shift();
        arr.push(el);
    }
    console.log(arr.join(' '));
}
arrRot([51,
    47, 32, 61, 21], 2)
arrRot([32,
    21, 61, 1], 4)
arrRot([2,
    4, 15, 31], 5)