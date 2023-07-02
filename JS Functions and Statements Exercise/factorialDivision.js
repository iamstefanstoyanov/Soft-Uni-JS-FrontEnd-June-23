function solve(x,y){
    for (let i = x-1; i > 0; i--) {
        x *= i
    }
    for (let m = y-1; m > 0; m--) {
        y *= m
    }
    let res = x / y;
    console.log(res.toFixed(2));
}