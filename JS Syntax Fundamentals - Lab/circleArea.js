function circle(x){
    let res;
    if(typeof x == 'number'){
        res = Math.pow(x, 2)*Math.PI;
        console.log(res.toFixed(2));
    }else{
        console.log(`We can not calculate the circle area, because we receive a ${typeof x}.`);
    }
}