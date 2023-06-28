function sum(x){
    let str = String(x);
    let sum = 0;
    let newStr = str.split('');
    for(let n of newStr){
        sum+=Number(n)
    }
    console.log(sum);
}
sum(245678)
sum(97561)
sum(543)