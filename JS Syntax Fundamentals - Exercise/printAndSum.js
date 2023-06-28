function printAndSum(x,y){
    let res = '';
    let sum = 0;
    for(let i = x; i<=y;i++){
        sum+= i;
        res+= ` ${i}`
    }
    console.log(res);
    console.log(`Sum: ${sum}`);
}
printAndSum(5,
    10);
printAndSum(0,
    26);
printAndSum(50,
    60);