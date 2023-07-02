function carWash(arr){
    let res = 0;
    for(let el of arr){
        if(el === 'soap'){
            res+=10;
        }else if(el ==='water'){
            res *= 1.2;
        }else if(el === 'vacuum cleaner'){
            res *= 1.25;
        }else{
            res *= 0.9;
        }
    }
    console.log(`The car is ${res.toFixed(2)}% clean.`)
}
carWash(['soap', 'soap', 'vacuum cleaner', 'mud', 'soap', 'water'])
carWash(["soap", "water", "mud", "mud", "water", "mud", "vacuum cleaner"])